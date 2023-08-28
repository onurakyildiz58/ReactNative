import React from "react"
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const RejectBtn = (props) => {
    const { buttonR, title, func } = props
    return (
        <TouchableOpacity style={[buttonR, styles.btn]} onPress={func}>
            <Text style={styles.buttonText}>Reject</Text>
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
export default RejectBtn