import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { GlobalStyles } from '../../GlobalStyle/style'
import { Ionicons } from '@expo/vector-icons'


function OutlinedBtn({ title, func, name, size, color }) {
    return (
        <TouchableOpacity onPress={func} style={styles.container}>
            <Ionicons name={name} size={size} color={color} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colours.teal100,
        borderColor: GlobalStyles.colours.teal900,
        borderWidth: 2,
        borderRadius: 8,
        flexDirection: 'row',
    },
    title: {
        color: GlobalStyles.colours.teal900,
        fontSize: 24,
        textAlign: 'center',
        marginLeft: 10,
    }
})

export default OutlinedBtn