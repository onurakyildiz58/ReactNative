import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/auth/AuthContent';
import Loading from '../../components/ui/Loading';

import { createUser } from '../../utils/requests/AuthRequest';

import { AuthContext } from '../../utils/ContextAPI/AuhtContext';
import { LanguageContext } from '../../utils/ContextAPI/LanguageContext';
import { languages } from '../../utils/languages/Language';

const translationMap = {
    TR: languages[0],
    ENG: languages[1],
};

function Register() {
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    const authCtx = useContext(AuthContext);
    const langCtx = useContext(LanguageContext);
    const translations = translationMap[langCtx.lang];

    async function singUp({ name, email, password }) {
        setIsAuthenticate(true);
        try {
            const { token, localId, refreshToken } = await createUser(name, email, password);
            console.log("what i recieve in register : ", refreshToken);
            authCtx.authenticate(token, localId);
        }
        catch (error) {
            Alert.alert(translations.regAlertHeader, translations.regAlertBody);
            setIsAuthenticate(false);
        }
    }

    if (isAuthenticate) {
        return <Loading message={translations.regLoadingStatus} />;
    }

    return <AuthContent onAuthenticate={singUp} />;
}

export default Register;