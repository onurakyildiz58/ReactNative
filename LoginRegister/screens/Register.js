import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const { container, wrapper, input, btnLog, btnLogText } = styles
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordcon, setPasswordCon] = useState('')
    
    return (
        <SafeAreaView style={container}>
            <View style={wrapper}>
                <TextInput
                    style={input}
                    placeholder='Full Name'
                    onChangeText={(name) => setName(name)}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput
                    style={input}
                    placeholder='Email'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput
                    style={input}
                    placeholder='Password'
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TextInput
                    style={input}
                    placeholder='Password Confirm'
                    onChangeText={(passwordcon) => setPasswordCon(passwordcon)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={btnLog}>
                <Text style={btnLogText}>Register</Text>
            </TouchableOpacity>
            <StatusBar
                hidden={true}
                translucent={true} />
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
    }
})

export default Register
