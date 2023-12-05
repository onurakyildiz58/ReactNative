import React, { useState, useEffect } from 'react'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { Text, StyleSheet, View, Alert } from 'react-native'
import OutlinedBtn from '../UI/OutlinesBtn'
import { GlobalStyles } from '../../GlobalStyle/style'

function LocationPicker() {
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    async function verifyPermissions() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficiant Permission', 'You need to grant location permission');
            return false;
        }
        return true;
    }

    async function locateUserHandler() {
        const isAllowed = await verifyPermissions();
        if (!isAllowed) {
            return;
        }
        const locationPromise = await getCurrentPositionAsync();
        setLat(locationPromise.coords.latitude);
        setLon(locationPromise.coords.longitude);
    }

    function pickLocationHandler() {

    }

    let imagePreview = <Text style={{ color: GlobalStyles.colours.teal900 }}>No location taken yet.</Text>

    if (lat && lon) {
        imagePreview = <Text style={{ color: GlobalStyles.colours.teal900 }}>location has been taken here is it {lat} {lon}</Text>
    }

    return (
        <View >
            <View style={styles.mapContainer}>{imagePreview}</View>
            <View style={styles.btnContainer}>
                <OutlinedBtn func={locateUserHandler} name={'location'} color={GlobalStyles.colours.teal900}>Locate User</OutlinedBtn>
                <OutlinedBtn func={pickLocationHandler} name={'map'} color={GlobalStyles.colours.teal900}>Pick On Map</OutlinedBtn>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: GlobalStyles.colours.teal900,
        backgroundColor: GlobalStyles.colours.teal100
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default LocationPicker