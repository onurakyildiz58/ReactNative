/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Alert, StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';

import { AuthContext } from '../../utils/store/contextAuth';
import { languages } from '../../utils/language/Language';

const translationMap = {
  TR: languages[0],
  ENG: languages[1],
};

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const translations = translationMap[authCtx.lang];

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    name: false,
    city: false,
    email: false,
    password: false,
    confirmPassword: false,
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
    let { name, city, email, password, confirmPassword } = credentials;

    name = name.trim();
    city = city.trim();
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const nameIsInvalid = name.length > 0;
    const cityIsInvalid = city.length > 0;
    const passwordsAreEqual = password === confirmPassword;

    if (isLogin) {
      if (!emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
        Alert.alert(translations.loginAlertHeader, translations.loginAlertBody);
        setCredentialsInvalid({
          name: !nameIsInvalid,
          city: !cityIsInvalid,
          email: !emailIsValid,
          password: !passwordIsValid,
          confirmPassword: !passwordIsValid || !passwordsAreEqual,
        });
        return;
      }
    }
    else {
      if (!nameIsInvalid || !cityIsInvalid || !emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
        Alert.alert(translations.regAlertHeader, translations.regAlertBody);
        setCredentialsInvalid({
          name: !nameIsInvalid,
          city: !cityIsInvalid,
          email: !emailIsValid,
          password: !passwordIsValid,
          confirmPassword: !passwordIsValid || !passwordsAreEqual,
        });
        return;
      }
    }

    if (isLogin) {
      onAuthenticate({ email, password });
    } else {
      onAuthenticate({ name, email, password, city });
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={30}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.authContent}>
          <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
          <View style={styles.buttons}>
            <FlatButton onPress={switchAuthModeHandler}>
              {isLogin ? translations.regFlatBtn : translations.logFlatBtn}
            </FlatButton>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'start',
  },
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
