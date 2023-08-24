import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Modal, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'

const App = () => {
  const { container, wrapper, input, btn, btnText, txt, btnX, modalContainer, modalTitle, textContainer, closeButton, txtModal, modalWrapper } = styles
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [count, setCount] = useState(0)
  const [courseGoal, setCourseGoal] = useState([])
  const [status, setStatus] = useState(null);

  const closeModal = () => {
    setStatus(null);
  }

  function getTextHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addTextHandler() {
    console.log(enteredGoalText)
    setCount(count + 1)
    console.log(count)
    setCourseGoal((currentFutureGoal) => [...currentFutureGoal, {text: enteredGoalText, id: count}])

  }

  return (
    <SafeAreaView style={container}>
      <Text style={txt}>To Do List</Text>
      <View style={wrapper}>
        <TextInput
          style={input}
          placeholder='Enter Note'
          onChangeText={getTextHandler}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity style={btn} onPress={addTextHandler}>
        <Text style={btnText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={btnX} onPress={() => setStatus(enteredGoalText)}>
        <Text style={btnText}>Show List</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={status !== null}
        onRequestClose={closeModal}
      >
        {enteredGoalText && (
          <View style={modalContainer}>
            <TouchableOpacity style={closeButton} onPress={closeModal}>
              <Feather style name="x" size={40} color={'#343A40'} />
            </TouchableOpacity>
            <View style={modalWrapper}>
              <Text style={txtModal}>Just Do It</Text>
            </View>
            <View style={modalTitle}>
              <FlatList alwaysBounceVertical={false} data={courseGoal} keyExtractor={(item) => item.id} renderItem={(itemData) => {
                return (
                  <View style={textContainer}>
                    <Feather style={{ marginRight: 10 }} name='target' size={20} color={'black'} />
                    <Text style={{ fontWeight: '500' }}>
                      {itemData.item.text}
                    </Text>
                  </View>
                )
              }} />
            </View>
          </View>
        )}
      </Modal>
      <StatusBar
        hidden={true}
        translucent={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    marginTop: 120
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  btn: {
    marginTop: 40,
    height: 70,
    width: 250,
    backgroundColor: '#DEE2E6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: 'black',
    elevation: 20
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  txt: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 100
  },
  btnX: {
    marginTop: 40,
    translucent: 'true',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  textContainer: {
    marginTop: 15,
    margin: 8,
    fontSize: 22,
    borderRadius: 10,
    backgroundColor: '#DEE2E6',
    paddingVertical: 10,
    marginHorizontal: 20,
    paddingLeft: 20,
    flexDirection: 'row'
  },
  closeButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'flex-end',
    padding: 10,
    shadowColor: 'black',
    elevation: 25
  },
  txtModal: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'red',
    width: 300,
    borderRadius: 15,
    height: 50,
    padding: 4,
    backgroundColor: '#DEE2E6',
  },
  modalWrapper: {
    alignItems: 'center',
    marginVertical: 20
  }
})
export default App