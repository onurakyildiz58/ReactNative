import React from "react"
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const ConfirmBtn = () => {
    const handleConfirm = (itemId) => {
        console.log(`Button clicked for item ${itemId}`);
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={() => handleConfirm(item.id)} >
            <Text style={styles.buttonText}>Onay</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#058a16'
    },
    buttonText:{
        color: 'white'
    }
})
export default ConfirmBtn