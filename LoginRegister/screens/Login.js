import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import Header from '../components/Header'

import { firebase } from '../config'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    function enteredMail (mail) {
        setEmail(mail)
    }
    function enteredPass (pass){
        setPassword(pass)
    }

    LoginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header name={'Login'} />
            <View style={styles.wrapper}>
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
            </View>
            <TouchableOpacity style={styles.btnLog} onPress={() => LoginUser(email, password)}>
                <Text style={styles.btnLogText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnReg} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.btnRegText}>Register</Text>
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
        marginTop: 180
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

export default Login
