import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LanguageContext = createContext({
    lang: 'TR',
    setLanguage: (lang) => {},
});

function LangContextProvider({ children }) {
    const [lang, setLang] = useState('TR');

    useEffect(() => {
        const loadStoredLang = async () => {
            try {
                const storedLang = await AsyncStorage.getItem('lang');
                if (storedLang) {
                    setLang(storedLang);
                }
            } catch (error) {
                console.error('Failed to load language from AsyncStorage:', error);
            }
        };
        loadStoredLang();
    }, []);

    const setLanguage = useCallback(async (language) => {
        setLang(language);
        try {
            await AsyncStorage.setItem('lang', language);
        } catch (error) {
            console.error('Failed to save language to AsyncStorage:', error);
        }
    }, []);

    const value = {
        lang,
        setLanguage,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export default LangContextProvider;