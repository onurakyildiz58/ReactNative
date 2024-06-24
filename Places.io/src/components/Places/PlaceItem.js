import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../GlobalStyle/style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function PlaceItem({ place, func }) {
  return (
    <TouchableOpacity style={styles.item} onPress={func}>
      <Image style={styles.img} source={{ uri: place.imageUri }} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 8,
    marginVertical: hp('1%'), 
    backgroundColor: GlobalStyles.colours.teal100,
    borderColor: GlobalStyles.colours.teal900,
    borderWidth: 2,
    elevation: 5,
    shadowColor: GlobalStyles.colours.gray900,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingHorizontal: wp('3%'),
  },
  img: {
    width: wp('30%'),
    height: wp('30%'),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
    color: GlobalStyles.colours.teal900,
    marginVertical: hp('1%'), 
  },
  address: {
    fontSize: wp('3.5%'),
    color: GlobalStyles.colours.teal900,
  },
});

export default PlaceItem;
