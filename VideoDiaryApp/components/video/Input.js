import React from "react";
import { Text, View, TextInput } from "react-native";
import { s } from "react-native-wind";

function Input({ label, onUpdateValue, value, multiline = false, error }) {
    return (
        <View style={s`my-2`}>
            <Text style={s`${error ? "text-red-600" : "text-gray-900"} mb-1`}>
                {error || label}
            </Text>
            <TextInput
                style={s`p-2 bg-gray-100 border ${error ? "border-red-600" : "border-gray-900"} text-gray-700 rounded-lg text-base`}
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={onUpdateValue}
                value={value}
                multiline={multiline}
                numberOfLines={multiline ? 4 : 1}
                textAlignVertical={multiline ? 'top' : 'center'}
            />
        </View>
    );
}

export default Input;
