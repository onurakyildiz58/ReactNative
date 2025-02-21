import React from "react";
import { Text, View, TextInput } from "react-native";
import { s } from "react-native-wind";

function Input({ label, onUpdateValue, value }) {
    return (
        <View style={s`my-2`}>
            <Text style={s`text-gray-900 mb-1}`}>
                {label}
            </Text>
            <TextInput
                style={s`p-2 bg-gray-100 border border-gray-900 text-gray-700 rounded-lg text-base`}
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default Input;
