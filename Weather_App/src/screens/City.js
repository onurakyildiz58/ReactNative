import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'

const City = ({ weatherData }) => {
    const { name, country, population, sunrise, sunset } = weatherData
    return (
        <SafeAreaView style={container} >
            <Text style={[styles.cityName, styles.countryText]} >{name}</Text>
            <Text style={[styles.countryName, styles.countryText]} >{country}</Text>
            <View style={styles.populationWrapper} >
                <Feather name='user' size={50} color={'#155D27'} />
                <Text style={styles.populationText} >{`Population: ${population}`}</Text>
            </View>
            <View style={styles.sunrisesunset} >
                <Feather name='sunrise' size={50} color={'#155D27'} />
                <Text style={styles.suntext} >{moment(sunrise).format('h:mm:ss a')}</Text>
            </View>
            <View style={styles.sunrisesunset} >
                <Feather name='sunset' size={50} color={'#155D27'} />
                <Text style={styles.suntext} >{moment(sunset).format('h:mm:ss a')}</Text>
            </View>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
                hidden={true}
                translucent={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B7EFC5'
    },
    cityName: {
        fontSize: 40,
        marginTop: 50
    },
    countryName: {
        fontSize: 30
    },
    countryText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#155D27'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: '#155D27',
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
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#155D27'
    }
})

export default City