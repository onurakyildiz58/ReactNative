/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';

function Input({ label, keyboardType, secure, onUpdateValue, value, isInvalid, theme }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label(theme), isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput
                style={styles.input(theme)}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: (theme) => ({
        color: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray700,
        marginBottom: 4,
    }),
    labelInvalid: {
        color: GlobalStyles.colours.error,
    },
    input: (theme) => ({
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: theme === 'dark' ? GlobalStyles.colours.gray800 : GlobalStyles.colours.gray200,
        borderColor: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray900,
        color: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray700,
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        shadowColor: GlobalStyles.colours.black,
        elevation: 20,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }),
});

export default Input;
