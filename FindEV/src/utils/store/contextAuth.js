/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    token: null,
    localId: null,
    lang: 'ENG',
    theme: 'light',
    isAuthenticated: false,
    authenticate: (token, localId) => { },
    setLanguage: (lang) => { },
    setTheme: (theme) => { },
    logout: () => { },
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState(null);
    const [localId, setLocalId] = useState(null);
    const [lang, setLang] = useState('ENG');
    const [theme, setThemeState] = useState('light');

    useEffect(() => {
        const loadStoredLang = async () => {
            try {
                const storedLang = await AsyncStorage.getItem('lang');
                const storedTheme = await AsyncStorage.getItem('theme');
                if (storedLang) {
                    setLang(storedLang);
                }
                if (storedTheme) {
                    setThemeState(storedTheme);
                }
            } catch (error) {
                console.error('Failed to load language/theme from AsyncStorage:', error);
            }
        };
        loadStoredLang();
    }, []);

    const authenticate = async (token, localID) => {
        setAuthToken(token);
        setLocalId(localID);
        try {
            await AsyncStorage.setItem('authToken', token);
            await AsyncStorage.setItem('localId', localID);
        } catch (error) {
            console.error('Failed to save token to AsyncStorage:', error);
        }
    };

    const logout = async () => {
        setAuthToken(null);
        setLocalId(null);
        try {
            await AsyncStorage.removeItem('authToken');
            await AsyncStorage.removeItem('localId');
        } catch (error) {
            console.error('Failed to remove token from AsyncStorage:', error);
        }
    };

    const setLanguage = async (language) => {
        setLang(language);
        try {
            await AsyncStorage.setItem('lang', language);
        } catch (error) {
            console.error('Failed to save language to AsyncStorage:', error);
        }
    };

    const setTheme = async (themestate) => {
        setThemeState(themestate);
        try {
            await AsyncStorage.setItem('theme', themestate);
        } catch (error) {
            console.error('Failed to save theme to AsyncStorage:', error);
        }
    };

    const value = {
        token: authToken,
        localId: localId,
        isAuthenticated: !!authToken,
        lang: lang,
        theme: theme,
        authenticate: authenticate,
        setLanguage: setLanguage,
        setTheme: setTheme,
        logout: logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
