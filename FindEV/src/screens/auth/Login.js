/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/auth/AuthContent';
import Loading from '../../components/ui/Loading';

import { loginUser } from '../../utils/auth/auth';
import { AuthContext } from '../../utils/store/contextAuth';


import { languages } from '../../utils/language/Language';

const translationMap = {
  TR: languages[0],
  ENG: languages[1],
};

function Login() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const authCtx = useContext(AuthContext);
  const translations = translationMap[authCtx.lang];

  async function login({ email, password }) {
    setIsAuthenticate(true);
    try {
      const { token, localId } = await loginUser(email, password);
      authCtx.authenticate(token, localId);
    }
    catch (error) {
      Alert.alert(
        translations.loginAlertHeader,
        translations.loginAlertBody
      );
      setIsAuthenticate(false);
    }
  }

  if (isAuthenticate) {
    return <Loading message={translations.loginLoadingStatus} />;
  }
  return <AuthContent isLogin onAuthenticate={login} />;
}

export default Login;
