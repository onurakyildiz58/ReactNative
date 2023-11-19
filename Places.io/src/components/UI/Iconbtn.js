import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


function Iconbtn({ name, size, color, func }) {
    return (
        <TouchableOpacity onPress={func} style={styles.container}>
            <Ionicons name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Iconbtn