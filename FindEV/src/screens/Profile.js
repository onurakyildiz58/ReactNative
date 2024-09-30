/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView } from 'react-native';

import CustomBackHeader from '../components/ui/CustomBackHeader';
import Button from '../components/ui/Button';
import DoubleButton from '../components/ui/DoubleButton';
import Loading from '../components/ui/Loading';

import { AuthContext } from '../utils/store/contextAuth';
import { fetchLoggedInUser } from '../utils/auth/auth';

import { languages } from '../utils/language/Language';

import { GlobalStyles } from '../utils/style/Color';
import Switch from '../components/ui/CustomSwitch';

const translationMap = {
    TR: languages[0],
    ENG: languages[1],
};

function Profile({ navigation }) {
    const authCtx = useContext(AuthContext);
    const translations = translationMap[authCtx.lang];

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
        authCtx.setTheme('Koyu');
    };

    const handleLightThemeSelect = () => {
        authCtx.setTheme('Açık');
    };

    const handleLocSwitch = () => {
        if (!islocEnabled) {
            setIslocEnabled(true);
        } else {
            setIslocEnabled(false);
        }
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
        <View style={styles.container}>
            <CustomBackHeader title={translations.profilePageHeader} func={goback} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.userCard}>
                    <Text style={styles.userHeader}>{translations.userInfo}</Text>
                    <Text style={styles.userInfo}>{translations.username}: {userData.name}</Text>
                    <Text style={styles.userInfo}>{translations.useremail}: {userData.email}</Text>
                    <Text style={styles.userInfo}>{translations.usercity}: {userData.city}</Text>
                </View>
                <View style={styles.settingsCard}>
                    <Text style={styles.settingsHeader}>{translations.userPreference}</Text>
                    <Text style={styles.prepInfo}>{translations.passReset}</Text>
                    <Text style={styles.prepInfo}>{translations.langSelect}</Text>
                    <DoubleButton
                        textLeft={'ENG'}
                        textRight={'TR'}
                        onPressL={handleEnglishSelect}
                        onPressR={handleTurkishSelect}
                        active={authCtx.lang === 'ENG' ? 'ENG' : 'TR'}
                    />
                    <Text style={styles.prepInfo}>{translations.themeSelect}</Text>
                    <DoubleButton
                        textLeft={'Koyu'}
                        textRight={'Açık'}
                        onPressL={handleDarkThemeSelect}
                        onPressR={handleLightThemeSelect}
                        active={authCtx.theme === 'Koyu' ? 'Koyu' : 'Açık'}
                    />
                    <Switch title={translations.locations} func={handleLocSwitch} value={islocEnabled} />
                </View>
            </ScrollView>
            <View style={styles.logoutBtn}>
                <Button onPress={authCtx.logout}>{translations.logout}</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colours.white,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100,
    },
    logoutBtn: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    userCard: {
        backgroundColor: GlobalStyles.colours.green100,
        padding: 20,
        margin: 8,
        borderRadius: 12,
        elevation: 10,
        shadowColor: GlobalStyles.colours.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    },
    userHeader: {
        fontSize: 24,
        fontWeight: '700',
        color: GlobalStyles.colours.gray700,
        textAlign: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: GlobalStyles.colours.gray500,
    },
    userInfo: {
        fontSize: 18,
        color: GlobalStyles.colours.gray700,
        marginBottom: 10,
    },
    prepInfo: {
        fontSize: 18,
        color: GlobalStyles.colours.gray700,
        marginBottom: 10,
    },
    settingsCard: {
        marginTop: 30,
        padding: 20,
        margin: 8,
        backgroundColor: GlobalStyles.colours.green100,
        borderRadius: 12,
        elevation: 10,
        shadowColor: GlobalStyles.colours.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    },
    settingsHeader: {
        fontSize: 24,
        fontWeight: '700',
        color: GlobalStyles.colours.gray700,
        textAlign: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: GlobalStyles.colours.gray500,
    },
    settingItem: {
        fontSize: 18,
        color: GlobalStyles.colours.gray700,
        marginBottom: 10,
    },
});

export default Profile;
