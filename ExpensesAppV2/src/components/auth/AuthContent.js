import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatBtn';
import AuthForm from './AuthForm';
import PasswordReset from '../ui/PasswordReset';

import { GlobalStyles } from '../../utils/styles/Color';

import { LanguageContext } from '../../utils/ContextAPI/LanguageContext';
import { languages } from '../../utils/languages/Language';

const translationMap = {
  TR: languages[0],
  ENG: languages[1],
};

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [resetMail, setResetMail] = useState(false);

  const langCtx = useContext(LanguageContext);
  const translations = translationMap[langCtx.lang];


  const [credentialsInvalid, setCredentialsInvalid] = useState({
    name: false,
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
    let { name, email, password, confirmPassword } = credentials;

    name = name.trim();
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const nameIsInvalid = name.length > 0;
    const passwordsAreEqual = password === confirmPassword;

    if (isLogin) {
      if (!emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
        Alert.alert(translations.loginAlertHeader, translations.loginAlertBody);
        setCredentialsInvalid({
          name: !nameIsInvalid,
          email: !emailIsValid,
          password: !passwordIsValid,
          confirmPassword: !passwordIsValid || !passwordsAreEqual,
        });
        return;
      }
    }
    else {
      if (!nameIsInvalid || !emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
        Alert.alert(translations.regAlertHeader, translations.regAlertBody);
        setCredentialsInvalid({
          name: !nameIsInvalid,
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
      onAuthenticate({ name, email, password });
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
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.authContent}>
            <AuthForm
              isLogin={isLogin}
              onSubmit={submitHandler}
              credentialsInvalid={credentialsInvalid}
            />
            <View style={styles.buttons}>
              {isLogin && (
                <FlatButton onPress={modalHandler}>{translations.forgotPass}</FlatButton>
              )}
              <FlatButton onPress={switchAuthModeHandler}>
                {isLogin ? translations.regFlatBtn : translations.logFlatBtn}
              </FlatButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <PasswordReset
        modalVisible={modalVisible}
        modalTitle={translations.resetMail}
        func={() => setModalVisible(false)}
        label={translations.email}
        onChange={onChange}
        value={resetMail}
        btnFunc={() => forgotPass(resetMail)}
        btnLText={translations.reset}
        btnRText={translations.cancel}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colours.gray100,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AuthContent;