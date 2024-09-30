/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

import { GlobalStyles } from '../../utils/style/Color';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    name: nameIsInvalid,
    city: cityIsInvalid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'name':
        const formattedName = enteredValue
          .split(' ')
          .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
          .join(' ');
        setEnteredName(formattedName);
        break;
      case 'city':
        const formattedCity = enteredValue
          .charAt(0)
          .toLocaleUpperCase() + enteredValue.slice(1);
        setEnteredCity(formattedCity);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      name: enteredName,
      city: enteredCity,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{isLogin ? 'Giriş' : 'Kaydol'}</Text>
        </View>
        {!isLogin && (
          <Input
            label="İsim Soyisim"
            onUpdateValue={updateInputValueHandler.bind(this, 'name')}
            value={enteredName}
            keyboardType="default"
            isInvalid={nameIsInvalid}
          />
        )}
        <Input
          label="Email"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        <Input
          label="Şifre"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          textContentType="none"
          autoComplete="off"
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Şifre Tekrarı"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secure
            textContentType="none"
            autoComplete="off"
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        {!isLogin && (
          <Input
            label="Şehir"
            onUpdateValue={updateInputValueHandler.bind(this, 'city')}
            value={enteredCity}
            keyboardType="default"
            isInvalid={cityIsInvalid}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Giriş Yap' : 'Kaydol'}
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    color: GlobalStyles.colours.gray700,
  },
});

export default AuthForm;
