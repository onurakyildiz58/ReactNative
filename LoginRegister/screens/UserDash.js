import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { firebase } from '../config'

const UserDash = () => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    // Fetch user data from Firestore
    const unsubscribe = firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          console.log('User document does not exist.');
        }
      });

    return () => {
      unsubscribe(); // Unsubscribe from Firestore updates when the component unmounts
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Dahsboard'} />
      <Text style={styles.txt}>{userData.Name}</Text>
      <Text style={styles.txt}>{userData.LastName}</Text>
      <Text style={styles.txt}>{userData.UserEmail}</Text>
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
