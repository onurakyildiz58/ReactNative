import React from "react"
import { Text, TouchableOpacity } from 'react-native'

const ConfirmBtn = (props) => {
    const { buttonC, btn, buttonText, title, func } = props
    return (
        <TouchableOpacity style={[buttonC, btn]} onPress={func}>
            <Text style={buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ConfirmBtn