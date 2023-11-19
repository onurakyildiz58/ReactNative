import React, { useLayoutEffect } from 'react'
import Iconbtn from '../components/UI/Iconbtn'
import { GlobalStyles } from '../GlobalStyle/style'
import PlacesList from '../components/Places/PlacesList';
import { View } from 'react-native';

function ShowPlaces({ navigation }) {

  function add() {
    navigation.navigate('AddPlaces');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Iconbtn name={'add'} size={35} color={GlobalStyles.colours.amber100} func={add} />
      }
    })
  }, [navigation,]);

  return (
    <View style={{backgroundColor: GlobalStyles.colours.green100, flex: 1}}>
      <PlacesList />
    </View>
  )
}

export default ShowPlaces