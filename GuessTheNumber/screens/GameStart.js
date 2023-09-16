import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import Color from '../utils/Color'

const GameStart = ({onPicked}) => {
  const [num, setNum] = useState('')

  function getNum(enteredNum) {
    setNum(enteredNum)
  }

  function guessHandler() {
    const chosenNum = parseInt(num)

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99 || chosenNum == '') {
      Alert.alert(
        'Invalid Value',
        'Number must be between 0-99 ',
        [{
          text: 'Ok',
          onPress: () => reset(),
        }]);
    }
    else{
      onPicked(chosenNum)
    }
  }

  function reset() {
    setNum('')
  }
  return (
    <View style={styles.container}>
      <Title/>
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
        <PrimaryButton children={'Reset'} func={reset} />
        <PrimaryButton children={'Confirm'} func={guessHandler} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.green400,
    marginTop: 100,
    alignItems: 'center',
    paddingVertical: 50,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: Color.black,
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
  }
})

export default GameStart
