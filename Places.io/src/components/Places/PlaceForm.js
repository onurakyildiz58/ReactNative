import React, { useCallback, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, Alert } from 'react-native'

import { GlobalStyles } from '../../GlobalStyle/style'
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import OutlinedBtn from '../UI/OutlinesBtn';
import { Place } from '../../model/place'
import { reverseGeocodeAsync } from 'expo-location';

function PlaceForm({ onCreatePlace }) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [pickedLocation, setPickedLocation] = useState();

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }

    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri);
    }

    const pickLocationHandler = useCallback((location) => {
        setPickedLocation(location);
    }, []);

    const getAddress = async () => {
        const address = await reverseGeocodeAsync({
            latitude: pickedLocation.lat,
            longitude: pickedLocation.lon,
        });
        const readableAddress = `${address[0].district} Mah. ${address[0].street} no:${address[0].name} posta kodu:${address[0].postalCode} ${address[0].subregion}`;
        console.log(readableAddress)
        return readableAddress;
    }

    async function savePlaceHandler() {
        if (!enteredTitle || !pickedLocation) {
            Alert.alert('Incomplete Data', 'Please provide all details');
            return;
        }

        const address = await getAddress();
        const placeData = new Place(enteredTitle, selectedImage, { ...pickedLocation, address });
        onCreatePlace(placeData);
    }


    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Title here'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={changeTitleHandler}
                    value={enteredTitle}
                />
            </View>
            <ImagePicker fetchImageURI={takeImageHandler} />
            <LocationPicker title={enteredTitle} fetchUserLocation={pickLocationHandler} />
            <View style={{ marginBottom: 30 }}>
                <OutlinedBtn func={savePlaceHandler} name={'download'} color={GlobalStyles.colours.teal900}>Save Place</OutlinedBtn>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
        color: GlobalStyles.colours.teal900,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 16,
        borderColor: GlobalStyles.colours.teal900,
        borderWidth: 2,
        borderRadius: 8,
        color: GlobalStyles.colours.teal900,
        fontWeight: '600',
        backgroundColor: GlobalStyles.colours.teal100
    }
})

export default PlaceForm