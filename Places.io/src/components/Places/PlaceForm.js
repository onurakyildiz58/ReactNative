import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native'
import { GlobalStyles } from '../../GlobalStyle/style'
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function onTitleChange(enteredText) {
        setEnteredTitle(enteredText);
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
            <ImagePicker />
            <LocationPicker title={enteredTitle} />
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