import React, { useState } from 'react'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus, requestForegroundPermissionsAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { Text, StyleSheet, View, Alert } from 'react-native'
import OutlinedBtn from '../UI/OutlinesBtn'
import { GlobalStyles } from '../../GlobalStyle/style'

function LocationPicker() {
    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    async function verifyPermissions() {
        const { status } = await requestForegroundPermissionsAsync();

        if (status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', 'You need to grant location permissions.');
            return false;
        }

        return true;
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);

    }

    function pickLocationHandler() {

    }

    let imagePreview = <Text style={{ color: GlobalStyles.colours.teal900 }}>No location taken yet.</Text>

    if (lat && lon) {
        imagePreview =(
            <MapView style={styles.map}
                initialRegion={{
                    latitude: lat,
                    latitudeDelta: 0.006749924568495658,
                    longitude: lon,
                    longitudeDelta: 0.014761872589588165,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: lat,
                        longitude: lon,
                    }}
                    title="Your Location"
                    description={`Latitude: ${lat}, Longitude: ${lon}`}
                />
            </MapView>
        );
    }

    return (
        <View >
            <View style={styles.mapContainer}>{imagePreview}</View>
            <View style={styles.btnContainer}>
                <OutlinedBtn func={getLocationHandler} name={'location'} color={GlobalStyles.colours.teal900}>Locate User</OutlinedBtn>
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
    },
    map: {
        height: '98%',
        width: '98%',
    }
})

export default LocationPicker