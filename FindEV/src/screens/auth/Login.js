/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/auth/AuthContent';
import Loading from '../../components/ui/Loading';

import { loginUser } from '../../utils/auth/auth';
import { AuthContext } from '../../utils/store/contextAuth';

function Login() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const authCtx = useContext(AuthContext);

  async function login({ email, password }) {
    setIsAuthenticate(true);
    try {
      const { token, localId } = await loginUser(email, password);
      authCtx.authenticate(token, localId);
    }
    catch (error) {
      Alert.alert(
        'Başarısız Giriş!',
        'Lütfen Bilgilerinizi Kontrol Ediniz'
      );
      setIsAuthenticate(false);
    }
  }

  if (isAuthenticate) {
    return <Loading message={'Giriş Yapılıyor...'} />;
  }
  return <AuthContent isLogin onAuthenticate={login} />;
}

export default Login;
