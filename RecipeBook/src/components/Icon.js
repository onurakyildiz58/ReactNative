import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

function Icon({ name, func }) {
    return (
        <TouchableOpacity onPress={func}>
            <FontAwesome name={name} size={25} color='black' />
        </TouchableOpacity>

    )
}

export default Icon