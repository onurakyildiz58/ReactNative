import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { GlobalStyles } from '../../GlobalStyle/style'
import { Ionicons } from '@expo/vector-icons'


function OutlinedBtn({ children, func, name, color }) {
    return (
        <TouchableOpacity onPress={func} style={styles.container}>
            <Ionicons name={name} size={18} color={color} />
            <Text style={styles.title}>{children}</Text>
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
        textAlign: 'center',
        marginLeft: 10,
    }
})

export default OutlinedBtn