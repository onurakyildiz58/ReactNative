/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView } from 'react-native';

import CustomBackHeader from '../components/ui/CustomBackHeader';
import Button from '../components/ui/Button';
import DoubleButton from '../components/ui/DoubleButton';
import Loading from '../components/ui/Loading';
import CustomSwitch from '../components/ui/CustomSwitch';

import { AuthContext } from '../utils/store/contextAuth';
import { fetchLoggedInUser } from '../utils/auth/auth';

import { languages } from '../utils/language/Language';

import { GlobalStyles } from '../utils/style/Color';

const translationMap = {
    TR: languages[0],
    ENG: languages[1],
};

function GetTheme() {
    const authCtx = useContext(AuthContext);
    return authCtx.theme;
}

function Profile({ navigation }) {
    const authCtx = useContext(AuthContext);
    const translations = translationMap[authCtx.lang];
    const theme = GetTheme();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [islocEnabled, setIslocEnabled] = useState(false);

    function goback() {
        navigation.goBack();
    }

    const handleEnglishSelect = () => {
        authCtx.setLanguage('ENG');
    };

    const handleTurkishSelect = () => {
        authCtx.setLanguage('TR');
    };

    const handleDarkThemeSelect = () => {
        authCtx.setTheme('dark');
    };

    const handleLightThemeSelect = () => {
        authCtx.setTheme('light');
    };

    const handleLocSwitch = () => {
        setIslocEnabled((prev) => !prev);
    };

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const token = authCtx.token;
                const localId = authCtx.localId;
                const fetchedData = await fetchLoggedInUser(localId, token);
                setUserData(fetchedData);
            } catch (error) {
                Alert.alert(translations.fetchUserDataErrorHeader, translations.fetchUserDataErrorBody);
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, [authCtx.token, authCtx.localId, translations]);

    if (loading) {
        return <Loading message={translations.fetchInfo} />;
    }

    return (
        <View style={styles.container(theme)}>
            <CustomBackHeader title={translations.profilePageHeader} func={goback} theme={theme} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.userCard(theme)}>
                    <Text style={styles.userHeader(theme)}>{translations.userInfo}</Text>
                    <Text style={styles.info(theme)}>{translations.username}: {userData.name}</Text>
                    <Text style={styles.info(theme)}>{translations.useremail}: {userData.email}</Text>
                    <Text style={styles.info(theme)}>{translations.usercity}: {userData.city}</Text>
                </View>
                <View style={styles.settingsCard(theme)}>
                    <Text style={styles.settingsHeader(theme)}>{translations.userPreference}</Text>
                    <Text style={styles.info(theme)}>{translations.passReset}</Text>
                    <Text style={styles.info(theme)}>{translations.langSelect}</Text>
                    <DoubleButton
                        textLeft={'ENG'}
                        textRight={'TR'}
                        onPressL={handleEnglishSelect}
                        onPressR={handleTurkishSelect}
                        activeSide={authCtx.lang === 'ENG' ? 'left' : 'right'}
                        theme={theme}
                    />
                    <Text style={styles.info(theme)}>{translations.themeSelect}</Text>
                    <DoubleButton
                        textLeft={translations.dark}
                        textRight={translations.light}
                        onPressL={handleDarkThemeSelect}
                        onPressR={handleLightThemeSelect}
                        activeSide={authCtx.theme === 'dark' ? 'left' : 'right'}
                        theme={theme}
                    />
                    <CustomSwitch
                        title={translations.locations}
                        func={handleLocSwitch}
                        value={islocEnabled}
                        theme={theme} />
                </View>
            </ScrollView>
            <View style={styles.logoutBtn}>
                <Button onPress={authCtx.logout} theme={theme}>{translations.logout}</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flex: 1,
        backgroundColor: theme === 'dark' ? GlobalStyles.colours.gray700 : GlobalStyles.colours.gray100,
    }),
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 130,
        marginTop: 30,
    },
    logoutBtn: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    userCard: (theme) => ({
        backgroundColor: theme === 'dark' ? GlobalStyles.colours.gray900 : GlobalStyles.colours.green100,
        padding: 20,
        margin: 8,
        borderRadius: 12,
        elevation: 10,
        shadowColor: GlobalStyles.colours.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    }),
    userHeader: (theme) => ({
        fontSize: 24,
        fontWeight: '700',
        color: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray900,
        textAlign: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: GlobalStyles.colours.gray500,
    }),
    info: (theme) => ({
        fontSize: 18,
        color: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray900,
        marginBottom: 10,
    }),
    settingsCard: (theme) => ({
        marginTop: 30,
        padding: 20,
        margin: 8,
        backgroundColor: theme === 'dark' ? GlobalStyles.colours.gray900 : GlobalStyles.colours.green100,
        borderRadius: 12,
        elevation: 10,
        shadowColor: GlobalStyles.colours.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    }),
    settingsHeader: (theme) => ({
        fontSize: 24,
        fontWeight: '700',
        color: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray900,
        textAlign: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: GlobalStyles.colours.gray500,
    }),
});

export default Profile;
