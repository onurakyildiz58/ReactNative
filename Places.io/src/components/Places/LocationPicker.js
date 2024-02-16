import React, { useEffect, useState } from 'react'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus, requestForegroundPermissionsAsync, reverseGeocodeAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { Text, StyleSheet, View, Alert } from 'react-native'
import OutlinedBtn from '../UI/OutlinesBtn'
import { GlobalStyles } from '../../GlobalStyle/style'

function LocationPicker({ title, fetchUserLocation }) {
    const [pickedLocation, setPickedLocations] = useState()
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
        setPickedLocations({
            lat: location.coords.latitude,
            lon: location.coords.longitude,
        });
    }

    useEffect(() => {
        fetchUserLocation(pickedLocation)
    }, [pickedLocation, fetchUserLocation])

    let imagePreview = <Text style={{ color: GlobalStyles.colours.teal900 }}>No location taken yet.</Text>

    if (pickedLocation) {
        imagePreview = (
            <MapView style={styles.map}
                initialRegion={{
                    latitude: pickedLocation.lat,
                    latitudeDelta: 0.005,
                    longitude: pickedLocation.lon,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: pickedLocation.lat,
                        longitude: pickedLocation.lon,
                    }}
                    title={title}
                />
            </MapView>
        );
    }

    return (
        <View style={{ marginBottom: 8 }}>
            <View style={styles.mapContainer}>{imagePreview}</View>
            <OutlinedBtn func={getLocationHandler} name={'location'} color={GlobalStyles.colours.teal900}>Locate User</OutlinedBtn>
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
    map: {
        height: '100%',
        width: '100%',
    }
})

export default LocationPicker