/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

import { GlobalStyles } from '../../utils/style/Color';

import { AuthContext } from '../../utils/store/contextAuth';
import { languages } from '../../utils/language/Language';

const translationMap = {
  TR: languages[0],
  ENG: languages[1],
};

function AuthForm({ isLogin, onSubmit, credentialsInvalid, theme }) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const authCtx = useContext(AuthContext);
  const translations = translationMap[authCtx.lang];

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
          <Text style={styles.headerText(theme)}>{isLogin ? translations.login : translations.register}</Text>
        </View>
        {!isLogin && (
          <Input
            label={translations.fullname}
            onUpdateValue={updateInputValueHandler.bind(this, 'name')}
            value={enteredName}
            keyboardType="default"
            isInvalid={nameIsInvalid}
            theme={theme}
          />
        )}
        <Input
          label={translations.email}
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          theme={theme}
        />
        <Input
          label={translations.pass}
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          textContentType="none"
          autoComplete="off"
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          theme={theme}
        />
        {!isLogin && (
          <Input
            label={translations.passCon}
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secure
            textContentType="none"
            autoComplete="off"
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            theme={theme}
          />
        )}
        {!isLogin && (
          <Input
            label={translations.city}
            onUpdateValue={updateInputValueHandler.bind(this, 'city')}
            value={enteredCity}
            keyboardType="default"
            isInvalid={cityIsInvalid}
            theme={theme}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler} theme={theme}>
            {isLogin ? translations.login : translations.register}
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
  headerText: (theme) => ({
    fontSize: 32,
    fontWeight: '800',
    color: theme === 'dark' ? GlobalStyles.colours.white : GlobalStyles.colours.gray700,
  }),
});

export default AuthForm;
