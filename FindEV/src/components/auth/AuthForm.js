/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
  const [enteredCity, setEnteredCity] = useState('');

  const {
    name: nameIsInvalid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
    city: cityIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'name':
        setEnteredName(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
      case 'city':
        setEnteredCity(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      city: enteredCity,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        {!isLogin && (
          <Input
            label="name"
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
            label="city"
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
});

export default AuthForm;
