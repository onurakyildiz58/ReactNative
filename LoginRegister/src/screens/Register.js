import { useState } from 'react';
import AuthContent from '../components/auth/AuthContent';
import { createUser } from '../../util/Auth';
import Loading from '../components/ui/Loading';

function Register() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  async function singUp({ email, password }) {
    setIsAuthenticate(true);
    await createUser(email, password);
    setIsAuthenticate(false);
  }

  if(isAuthenticate){
    return <Loading message={'Kullanıcı Oluşturuluyor...'} />
  }

  return <AuthContent onAuthenticate={singUp} />
}

export default Register