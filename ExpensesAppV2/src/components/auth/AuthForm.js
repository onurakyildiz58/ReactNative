import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

import { GlobalStyles } from '../../utils/styles/Color';

import { LanguageContext } from '../../utils/ContextAPI/LanguageContext';
import { languages } from '../../utils/languages/Language';

const translationMap = {
  TR: languages[0],
  ENG: languages[1],
};

function AuthForm({ isLogin, onSubmit, credentialsInvalid, theme }) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const langCtx = useContext(LanguageContext);
  const translations = translationMap[langCtx.lang];

  const {
    name: nameIsInvalid,
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
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{isLogin ? translations.login : translations.register}</Text>
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
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    color: GlobalStyles.colours.gray700,
  },
});

export default AuthForm;