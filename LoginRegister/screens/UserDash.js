import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { firebase } from '../config'

const UserDash = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data())
        }
        else {
          console.log('dont Exists')
        }
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Dahsboard'} />
      <Text style={styles.txt}>{name.name}</Text>
      <Text style={styles.txt}>{name.email}</Text>
      <TouchableOpacity style={styles.btnReg} onPress={() => firebase.auth().signOut()}>
        <Text style={styles.btnRegText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnReg: {
    marginTop: 20
  },
  btnRegText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default UserDash
