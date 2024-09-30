/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView } from 'react-native';

import CustomBackHeader from '../components/ui/CustomBackHeader';
import Button from '../components/ui/Button';
import DoubleButton from '../components/ui/DoubleButton';
import Loading from '../components/ui/Loading';

import { AuthContext } from '../utils/store/contextAuth';
import { fetchLoggedInUser } from '../utils/auth/auth';
import { GlobalStyles } from '../utils/style/Color';

function Profile({ navigation }) {
    const authCtx = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const token = authCtx.token;
                const localId = authCtx.localId;
                const fetchedData = await fetchLoggedInUser(localId, token);
                setUserData(fetchedData);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, [authCtx.token, authCtx.localId]);

    if (loading) {
        return <Loading message={'Fetching User Data'} />;
    }

    return (
        <View style={styles.container}>
            <CustomBackHeader title={'Profile'} func={goback} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.userCard}>
                    <Text style={styles.userHeader}>Kullanıcı Bilgileri</Text>
                    <Text style={styles.userInfo}>İsim Soyİsim: {userData.name}</Text>
                    <Text style={styles.userInfo}>Email: {userData.email}</Text>
                    <Text style={styles.userInfo}>Şehir: {userData.city}</Text>
                </View>
                <View style={styles.settingsCard}>
                    <Text style={styles.settingsHeader}>Tercihler</Text>
                    <Text style={styles.prepInfo}>Password Reset</Text>
                    <Text style={styles.prepInfo}>Dil Seçimi</Text>
                    <DoubleButton
                        textLeft={'ENG'}
                        textRight={'TR'}
                        onPressL={handleEnglishSelect}
                        onPressR={handleTurkishSelect}
                        active={authCtx.lang === 'ENG' ? 'ENG' : 'TR'}
                    />
                    <Text style={styles.prepInfo}>Tema Seçimi</Text>
                    <DoubleButton
                        textLeft={'Koyu'}
                        textRight={'Açık'}
                        onPressL={handleDarkThemeSelect}
                        onPressR={handleLightThemeSelect}
                        active={authCtx.theme === 'Koyu' ? 'Koyu' : 'Açık'}
                    />
                    <Text style={styles.prepInfo}>Notifications</Text>
                    <Text style={styles.prepInfo}>Location</Text>
                </View>
            </ScrollView>
            <View style={styles.logoutBtn}>
                <Button onPress={authCtx.logout}>Log Out</Button>
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
        paddingBottom: 100, // Optional, for extra padding at the bottom
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
