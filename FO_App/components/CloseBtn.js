import React from "react"
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
 
const ConfirmBtn = (props) => {
    const { closeButton, closeModal, name, size, color } = props
    return (
        <TouchableOpacity style={closeButton} onPress={closeModal}>
            <Feather name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}

export default ConfirmBtn