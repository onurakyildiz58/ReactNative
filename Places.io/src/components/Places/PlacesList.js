import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import PlaceItem from './PlaceItem'
import { GlobalStyles } from '../../GlobalStyle/style'

function PlacesList({ places }) {
    if (!places || places.length === 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places added yet</Text>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.list}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PlaceItem place={item} />} 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} />
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
    },
    list: {
        margin: 24,
        color: GlobalStyles.colours.black,
    },
})

export default PlacesList;