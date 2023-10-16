import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Color } from '../styles/Color'

function Input({ func, value }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Youtube Linki</Text>
            <TextInput
                style={styles.input} 
                placeholder={"Youtube Linki Gir..."}
                onChangeText={func}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        color: Color.gray700,
        marginBottom: 4,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Color.gray200,
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        shadowColor: Color.gray900,
        elevation: 5,
    }
})

export default Input 