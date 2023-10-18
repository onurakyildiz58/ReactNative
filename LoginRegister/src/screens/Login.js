import { useState } from 'react';
import AuthContent from '../components/auth/AuthContent'
import { loginUser } from '../../util/Auth';
import Loading from '../components/ui/Loading';

function Login() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  async function login({ email, password }) {
    setIsAuthenticate(true);
    await loginUser(email, password);
    setIsAuthenticate(false);
  }

  if(isAuthenticate){
    return <Loading message={'Giriş Yapılıyor...'} />
  }
  return <AuthContent isLogin onAuthenticate={login}/>
}

export default Login