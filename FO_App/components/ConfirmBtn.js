import React from "react"
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const ConfirmBtn = (props) => {
    const { buttonC, title, func } = props
    return (
        <TouchableOpacity style={[buttonC, styles.btn]} onPress={func}>
            <Text style={styles.buttonText}>Onay</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        color: '#DEE2E6'
    },
    buttonText:{
        color: '#DEE2E6'
    }
})
export default ConfirmBtn