import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Color } from '../styles/Color'

function Button({ func }) {
    return (
        <>
            <TouchableOpacity style={styles.btn} onPress={func}>
                <Text style={styles.text}>İndir</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Color.gray700,
        padding: 15,
        marginHorizontal: 36,
        borderRadius: 5,
        shadowColor: Color.black,
        elevation: 12
    },
    text: {
        color: Color.gray100,
        textAlign: 'center',
        fontSize: 20
    }
})

export default Button