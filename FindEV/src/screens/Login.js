/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles } from '../utils/Colors';
import Button from '../components/Button';

function Login() {

    function loginWithGoogle() {
        console.log("object");
    }

    return (
        <View style={styles.wrapper}>
            { /*put here image*/ }
            <Text style={styles.heading}>Elektrikli Araç Şarj İstasyon Bulma Uygulaması</Text>
            <Text style={styles.desc}>Hiç zaman kaybetmeden yakınındaki şarj istasyonlarını bul, tek tık ile rota oluştur.</Text>
            <View style={styles.btnWrapper}>
                <Button onPress={loginWithGoogle}>Login With Google</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: wp('5%'),
    },
    heading: {
        color: GlobalStyles.colours.black,
        fontSize: wp('6.5%'),
        textAlign: 'center',
        marginTop: hp('2%'),
    },
    desc: {
        fontSize: wp('4.5%'),
        marginTop: hp('1.5%'),
        textAlign: 'center',
    },
    btnWrapper: {
        marginTop: hp('5%'),
    },
});

export default Login;
