import React from "react"
import { View, Text } from 'react-native'

const RowText = (props) => {
    const { msgwrapper, msg1style, msg2style, msg1, msg2} = props
    return (
        <View style={msgwrapper} >
            <Text style={msg1style} >{msg1}</Text>
            <Text style={msg2style} >{msg2}</Text>
        </View>
    )
}


export default RowText