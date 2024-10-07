/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Alert, StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import PassRes from '../ui/PassRes';

import { AuthContext } from '../../utils/store/contextAuth';
import { languages } from '../../utils/language/Language';

import { resetPasswordMail } from '../../utils/auth/auth';
import { GlobalStyles } from '../../utils/style/Color';

const translationMap = {
  TR: languages[0],
  ENG: languages[1],
};

function GetTheme() {
  const authCtx = useContext(AuthContext);
  return authCtx.theme;
}

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const translations = translationMap[authCtx.lang];
  const theme = GetTheme();

  const [modalVisible, setModalVisible] = useState(false);
  const [resetMail, setResetMail] = useState(false);

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

  function modalHandler() {
    setModalVisible(true);
  }

  function onChange(enteredResMail) {
    setResetMail(enteredResMail);
  }

  async function forgotPass(resetEmail) {
    try {
      if (!resetEmail.includes('@')) {
        Alert.alert(translations.invalidEmailHeader, translations.invalidEmailBody);
        return;
      }
      const response = await resetPasswordMail(resetEmail);
      console.log(response.data);
      Alert.alert(translations.successEmailHeader, translations.successEmailBody);
    } catch (error) {
      Alert.alert(translations.unsuccessEmailHeader, translations.unsuccessEmailBody);
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container(theme)}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.authContent}>
            <AuthForm
              isLogin={isLogin}
              onSubmit={submitHandler}
              credentialsInvalid={credentialsInvalid}
              theme={theme}
            />
            <View style={styles.buttons}>
              {isLogin && (
                <FlatButton onPress={modalHandler} theme={theme}>{translations.forgotPass}</FlatButton>
              )}
              <FlatButton onPress={switchAuthModeHandler} theme={theme}>
                {isLogin ? translations.regFlatBtn : translations.logFlatBtn}
              </FlatButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <PassRes
        modalVisible={modalVisible}
        modalTitle={translations.resetMail}
        func={() => setModalVisible(false)}
        label={translations.email}
        onChange={onChange}
        value={resetMail}
        btnFunc={() => forgotPass(resetMail)}
        btnLText={translations.reset}
        btnRText={translations.cancel}
        theme={theme}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: (theme) => ({
    flex: 1,
    backgroundColor: theme === 'dark' ? GlobalStyles.colours.gray700 : GlobalStyles.colours.gray100,
    paddingBottom: 30,
  }),
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AuthContent;
