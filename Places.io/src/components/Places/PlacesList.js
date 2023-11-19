import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import ListItem from './ListItem'

function PlacesList({ places }) {
    if (!places || places.lenght === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places added yet</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <ListItem place={item} />} />
    )
}

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
    }
})

export default PlacesList;