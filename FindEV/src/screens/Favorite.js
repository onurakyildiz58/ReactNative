/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomBackHeader from '../components/ui/CustomBackHeader';

function Favorite({navigation}) {
  function goback(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <CustomBackHeader title={'Favorite Chargers'} func={goback}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorite;
