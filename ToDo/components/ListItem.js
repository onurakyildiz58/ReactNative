import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const { textContainer, feather, Name, Size, Color, listText, text, func, id } = props
    return (
        <View >
            <Pressable onPress={func.bind(this, id)} android_ripple={{color: '#a2a4a7'}} style={textContainer}>
                <Feather style={feather} name={Name} size={Size} color={Color} />
                <Text style={listText}>{text}</Text>
            </Pressable>
        </View>

    )
}

export default ListItem