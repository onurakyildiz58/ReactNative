import React, { useLayoutEffect, useEffect, useState } from 'react'
import Iconbtn from '../components/UI/Iconbtn'
import { GlobalStyles } from '../GlobalStyle/style'
import PlacesList from '../components/Places/PlacesList';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function ShowPlaces({ navigation, route }) {
  const [loadedPlace, setLoadedPlace] = useState([]);
  const isFocused = useIsFocused();

  function add() {
    navigation.navigate('AddPlaces');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Iconbtn name={'add'} size={35} color={GlobalStyles.colours.amber100} func={add} />
      }
    })
  }, [navigation]);

  useEffect(() => {
    if (isFocused && route.params) {
      console.log(route.params.place);
      setLoadedPlace((currPlaces) => [...currPlaces, route.params.place]);
    }
  }, [isFocused, route]);


  return (
    <View style={{ backgroundColor: GlobalStyles.colours.green100, flex: 1 }}>
      <PlacesList places={loadedPlace} />
    </View>
  )
}

export default ShowPlaces