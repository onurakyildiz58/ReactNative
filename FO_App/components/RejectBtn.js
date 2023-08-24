import React from "react"
import { Text, TouchableOpacity } from 'react-native'

const ConfirmBtn = (props) => {
    const { buttonR, btn, buttonText, title, func } = props
    return (
        <TouchableOpacity style={[buttonR, btn]} onPress={func}>
            <Text style={buttonText}>{title}</Text>
        </TouchableOpacity>

    )
}

export default ConfirmBtn