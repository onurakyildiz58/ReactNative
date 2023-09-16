import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function GameStart() {
  const [num, setNum] = useState('')

  function getNum(enteredNum) {
    setNum(enteredNum)
  }

  function guessHandler() {
    const chosenNum = parseInt(num)

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99 || chosenNum == '') {
      Alert.alert(
        'Geçersiz Değer',
        'Girilen değer 0-99 arasında olmalı',
        [{
          text: 'tamam',
          onPress: () => reset(),
        }]);
    }
    else{
      console.log(num)
    }
  }

  function reset() {
    setNum('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Enter Number</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={num}
        onChangeText={getNum}
        keyboardType='number-pad'
        maxLength={2}
      />
      <View style={styles.btnWrapper}>
        <PrimaryButton childeren={'Reset'} func={reset} />
        <PrimaryButton childeren={'Confirm'} func={guessHandler} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a5f1bf',
    marginTop: 100,
    alignItems: 'center',
    paddingVertical: 50,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000000',
    elevation: 12
  },
  input: {
    paddingTop: 10,
    width: 50,
    fontSize: 30,
    borderBottomWidth: 2,
    marginBottom: 10,
    textAlign: 'center'
  },
  btnWrapper: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 30,
    marginVertical: 20
  }
})

export default GameStart
