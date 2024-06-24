import React, { useCallback, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput, Alert } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { GlobalStyles } from '../../GlobalStyle/style';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import OutlinedBtn from '../UI/OutlinesBtn';
import { Place } from '../../model/place';
import { reverseGeocodeAsync } from 'expo-location';

function PlaceForm({ onCreatePlace }) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [pickedLocation, setPickedLocation] = useState();

    const changeTitleHandler = (enteredText) => {
        setEnteredTitle(enteredText);
    };

    const takeImageHandler = (imageUri) => {
        setSelectedImage(imageUri);
    };

    const pickLocationHandler = useCallback((location) => {
        setPickedLocation(location);
    }, []);

    const getAddress = async () => {
        const address = await reverseGeocodeAsync({
            latitude: pickedLocation.lat,
            longitude: pickedLocation.lon,
        });
        const readableAddress = `${address[0].district} Mah. ${address[0].street} no:${address[0].name} posta kodu:${address[0].postalCode} ${address[0].subregion}`;
        console.log(readableAddress);
        return readableAddress;
    };

    const savePlaceHandler = async () => {
        if (!enteredTitle || !pickedLocation) {
            Alert.alert('Incomplete Data', 'Please provide all details');
            return;
        }

        const address = await getAddress();
        const placeData = new Place(enteredTitle, selectedImage, { ...pickedLocation, address });
        onCreatePlace(placeData);
    };

    return (
        <ScrollView
            contentContainerStyle={styles.form}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.inputContainer}>
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
            <View style={styles.buttonContainer}>
                <OutlinedBtn func={savePlaceHandler} name={'download'} color={GlobalStyles.colours.teal900}>
                    Save Place
                </OutlinedBtn>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        flexGrow: 1,
        padding: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
        color: GlobalStyles.colours.teal900,
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        borderColor: GlobalStyles.colours.teal900,
        borderWidth: 2,
        borderRadius: 8,
        color: GlobalStyles.colours.teal900,
        backgroundColor: GlobalStyles.colours.teal100,
    },
    buttonContainer: {
        marginBottom: hp('5%'), // Use responsive height
    },
});

export default PlaceForm;
