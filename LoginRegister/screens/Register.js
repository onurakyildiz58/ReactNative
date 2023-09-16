import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native'
import Header from '../components/Header'
import { firebase } from '../config'
import { Feather } from '@expo/vector-icons'

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    function enteredName(name) {
        setName(name)
    }
    function enteredMail(mail) {
        setEmail(mail)
    }
    function enteredPass(pass) {
        setPassword(pass)
    }
    function enteredLastName(lastname) {
        setLastName(lastname)
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    RegUser = async (name, email, password, lastName) => {
        const maxRetries = 5;
        let currentRetry = 0;
        let success = false;

        while (currentRetry < maxRetries && !success) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        firebase.firestore().collection('users')
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                Name: name,
                                LastName: lastName,
                                UserEmail: email,
                            })
                    })
                    success = true;
            } catch (error) {
                console.error('Firestore error:', error);
                currentRetry++;
                await new Promise(resolve => setTimeout(resolve, 1000 * currentRetry));
            }
        }
        if (!success) {
            console.error('Failed to save data to Firestore after multiple retries.');
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
                    placeholder='Last Name'
                    onChangeText={enteredLastName}
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
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
                    <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color={'black'} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnLog} onPress={() => RegUser(name, email, password, lastName)}>
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
    },
    showPasswordButton: {
        alignItems: 'center',
    },
})

export default Register
