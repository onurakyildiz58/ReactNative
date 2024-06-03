/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles } from './src/utils/Colors';
import Login from './src/screens/Login';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.logoUp}>FIND EV</Text>
        <Text style={styles.logoDown}>CHARGERS</Text>
      </View>
      <Login />
      <StatusBar backgroundColor={GlobalStyles.colours.green500} barStyle={'dark-content'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: GlobalStyles.colours.white,
    shadowColor: 'black',
    elevation: 10,
    paddingVertical: hp('0.5%'), // 2% of the screen height
  },
  logoUp: {
    width: '100%',
    textAlign: 'center',
    fontSize: wp('12%'), // 12% of the screen width
    letterSpacing: wp('9.5%'), // 7.5% of the screen width
    color: GlobalStyles.colours.green500,
    fontWeight: 'bold',
  },
  logoDown: {
    width: '100%',
    textAlign: 'center',
    fontSize: wp('3.75%'), // 3.75% of the screen width
    letterSpacing: wp('11%'), // 11.75% of the screen width
    color: GlobalStyles.colours.green500,
    fontWeight: '500',
  },
});

export default App;
