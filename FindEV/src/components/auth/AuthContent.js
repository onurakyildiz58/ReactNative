/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    city: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Register');
    }
    else {
      navigation.replace('Login');
    }
  }

  function submitHandler(credentials) {
    let { name, email, password, confirmPassword, city } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const nameIsInvalid = name.length > 0;
    const cityIsInvalid = name.length > 0;
    const passwordsAreEqual = password === confirmPassword;

    if (!nameIsInvalid || !cityIsInvalid || !emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
      Alert.alert('Geçersiz Değer', 'Girilen Verileri Kontrol Ediniz');
      setCredentialsInvalid({
        name: !nameIsInvalid,
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
        city: cityIsInvalid,
      });
      return;
    }
    onAuthenticate({ name, email, password, city });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Kullanıcı Oluştur' : 'Giriş Yap'}
        </FlatButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
  },
  buttons: {
    marginTop: 8,
  },
});

export default AuthContent;
