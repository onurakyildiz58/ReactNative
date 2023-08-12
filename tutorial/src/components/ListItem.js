import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const {item, date, temp} = styles
    return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'black'} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: 'powderblue',
        borderRadius: 8
    },
    temp: {
        color: 'black',
        fontSize: 20
    },
    date: {
        color: 'black',
        fontSize: 15
    },
})

export default ListItem