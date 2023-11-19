import React from 'react'
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

function ListItem({ place, func }) {
    return (
        <TouchableOpacity onPress={func}>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default ListItem