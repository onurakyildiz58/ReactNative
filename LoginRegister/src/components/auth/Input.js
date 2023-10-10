import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

import { GlobalStyles } from '../../Styles/Colors'

function Input({ label, keyboardType, secure, onUpdateValue, value, isInvalid }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: GlobalStyles.colors.gray700,
        marginBottom: 4,
    },
    labelInvalid: {
        color: GlobalStyles.colors.error,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: GlobalStyles.colors.gray200,
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        shadowColor: GlobalStyles.colors.gray700,
        elevation: 5,
    }
})

export default Input