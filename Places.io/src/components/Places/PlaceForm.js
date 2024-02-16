import React, { useCallback, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native'

import { GlobalStyles } from '../../GlobalStyle/style'
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import OutlinedBtn from '../UI/OutlinesBtn';
import { reverseGeocodeAsync } from 'expo-location';

function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredImageURI, setEnteredImageURI] = useState('');
    const [enteredUserLocation, setEnteredUserLocation] = useState('');

    function onTitleChange(enteredText) {
        setEnteredTitle(enteredText);
    }

    function onChangeImageURI(imageURI) {
        setEnteredImageURI(imageURI);
    }

    const onChangeUserLocation = useCallback((userLocation) => {
        setEnteredUserLocation(userLocation);
    }, []);

    const getAddress = async () => {
        const address = await reverseGeocodeAsync({
            latitude: enteredUserLocation.lat,
            longitude: enteredUserLocation.lon,
        });
        const readableAddress = `${address[0].district} Mah. ${address[0].street} no:${address[0].name} posta kodu:${address[0].postalCode} ${address[0].subregion}`;
        return readableAddress;
    }

    function savePlaceHandler() {
        console.log(enteredImageURI);
        console.log(enteredTitle);
        console.log(enteredUserLocation);
        getAddress().then(address => {
            console.log(address);
        });;
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
                    onChangeText={onTitleChange}
                    value={enteredTitle}
                />
            </View>
            <ImagePicker fetchImageURI={onChangeImageURI} />
            <LocationPicker title={enteredTitle} fetchUserLocation={onChangeUserLocation} />
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