import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/auth/AuthContent';
import Loading from '../../components/ui/Loading';

import { loginUser } from '../../utils/requests/AuthRequest';

import { AuthContext } from '../../utils/ContextAPI/AuhtContext';
import { LanguageContext } from '../../utils/ContextAPI/LanguageContext';
import { languages } from '../../utils/languages/Language';

const translationMap = {
    TR: languages[0],
    ENG: languages[1],
};

function Login() {
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    const langCtx = useContext(LanguageContext);
    const authCtx = useContext(AuthContext);
    const translations = translationMap[langCtx.lang];

    async function login({ email, password }) {
        setIsAuthenticate(true);
        try {
            const { token, localId, refreshToken } = await loginUser(email, password);
            console.log("what i recieve in login : ", refreshToken)
            authCtx.authenticate(token, localId);
        }
        catch (error) {
            Alert.alert(translations.loginAlertHeader, translations.loginAlertBody);
            setIsAuthenticate(false);
        }
    }

    if (isAuthenticate) {
        return <Loading message={translations.loginLoadingStatus} />;
    }
    return <AuthContent isLogin onAuthenticate={login} />;
}

export default Login;