/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/auth/AuthContent';
import Loading from '../../components/ui/Loading';

import { createUser } from '../../utils/auth/auth';
import { AuthContext } from '../../utils/store/contextAuth';

function Register() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const authCtx = useContext(AuthContext);

  async function singUp({name, email, password, city}) {
    setIsAuthenticate(true);
    try {
      const { token, localId } = await createUser(name, email, password, city);
      authCtx.authenticate(token, localId);
    }
    catch (error) {
      Alert.alert(
        'Başarısız Kayıt!',
        'Lütfen Bilgilerinizi Kontrol Ediniz'
      );
      setIsAuthenticate(false);
    }
  }

  if (isAuthenticate) {
    return <Loading message={'Kullanıcı Oluşturuluyor...'} />;
  }

  return <AuthContent onAuthenticate={singUp} />;
}

export default Register;
