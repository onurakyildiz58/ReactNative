import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../utilities/weatherType"

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp, dateTextWrapper } = styles
    return (
        <View style={item}>
            <Feather name={weatherType[condition]?.icon} size={50} color={'#155D27'} />
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
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
        backgroundColor: '#B7EFC5',
        borderRadius: 8
    },
    temp: {
        color: '#155D27',
        fontSize: 20
    },
    date: {
        color: '#155D27',
        fontSize: 15
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem