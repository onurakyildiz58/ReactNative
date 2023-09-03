import React from "react"
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const RejectBtn = () => {
    const handleReject = (itemId) => {
        console.log(`Button clicked for item ${itemId}`);
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={() => handleReject(item.id)} >
            <Text style={styles.buttonText}>Red</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#e44040'
    },
    buttonText:{
        color: 'white'
    }
})
export default RejectBtn