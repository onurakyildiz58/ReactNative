import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import { firebase } from '../config'

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordcon, setPasswordCon] = useState('')

    function enteredName(name) {
        setName(name)
    }
    function enteredMail(mail) {
        setEmail(mail)
    }
    function enteredPass(pass) {
        setPassword(pass)
    }
    function enteredpassCon(passCon) {
        setPasswordCon(passCon)
    }
    
    RegUser = async (name, email, password, passwordcon) => {
        if (password === passwordcon) {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firebase.auth().currentUser.sendEmailVerification({
                        handleCodeInApp: true,
                        url: 'https://loginregisterrn-d0d49.firebaseapp.com',
                    })
                        .then(() => {
                            alert('verification email sent')
                        }).catch(error => {
                            alert(error.message)
                        })
                        .then(() => {
                            firebase.firestore().collection('users')
                                .doc(firebase.auth().currentUser.uid)
                                .set({
                                    name: name,
                                    email: email,
                                })
                        })
                        .catch((error) => {
                            alert(error.message)
                        })
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
        else {
            alert('password arent same')
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <Header name={'Register'} />
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    onChangeText={enteredName}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={enteredMail}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    onChangeText={enteredPass}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password Confirm'
                    onChangeText={enteredpassCon}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.btnLog} onPress={() => RegUser(name, email, password, passwordcon)}>
                <Text style={styles.btnLogText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnReg} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnRegText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
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
    btnLog: {
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
    btnLogText: {
        fontWeight: 'bold',
        fontSize: 22
    },
    btnReg: {
        marginTop: 20
    },
    btnRegText: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Register
