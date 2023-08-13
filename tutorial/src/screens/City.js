import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'

const City = () => {
    const { container, bg, city, country, countryText, population, populationWrapper, sunrisesunset, suntext } = styles
    return (
        <SafeAreaView style={container} >
            <ImageBackground source={require('../../assets/bg-city.jpg')} style={bg}>
                <Text style={[city, countryText]} >İstanbul</Text>
                <Text style={[country, countryText]} >Turkey</Text>
                <View style={populationWrapper} >
                    <Feather name='user' size={50} color={'whitesmoke'} />
                    <Text style={population} >15.5 Million</Text>
                </View>
                <View style={sunrisesunset} >
                    <Feather name='sunrise' size={50} color={'whitesmoke'} />
                    <Text style={suntext} >06:11</Text>
                </View>

                <View style={sunrisesunset} >
                    <Feather name='sunset' size={50} color={'whitesmoke'} />
                    <Text style={suntext} >20:06</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        flex: 1
    },
    city: {
        fontSize: 40,
        marginTop: 50
    },
    country: {
        fontSize: 30
    },
    countryText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    population: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'whitesmoke',
        fontWeight: 'bold'
    },
    sunrisesunset: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    suntext: {
        fontSize: 30,
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'whitesmoke'

    }
})

export default City