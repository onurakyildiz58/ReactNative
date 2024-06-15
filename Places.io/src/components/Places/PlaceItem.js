import React from 'react'
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../../GlobalStyle/style';

function PlaceItem({ place, func }) {
  return (
    <TouchableOpacity style={styles.item} onPress={func}>
      <Image style={styles.img} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: GlobalStyles.colours.teal100,
    borderColor: GlobalStyles.colours.teal900,
    borderRadius: 8,
    borderWidth: 2,
    elevation: 10,
    shadowColor: GlobalStyles.colours.gray900,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 1,
  },
  img: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: GlobalStyles.colours.teal900,
  },
  address: {
    fontSize: 12,
    marginTop: 10,
    color: GlobalStyles.colours.teal900,
  },
})

export default PlaceItem;
