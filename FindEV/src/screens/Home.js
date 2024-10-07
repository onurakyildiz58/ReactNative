/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import PageHeader from '../components/ui/PageHeader';

import { AuthContext } from '../utils/store/contextAuth';
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

function Home({ navigation }) {
    const authCtx = useContext(AuthContext);
    const translations = translationMap[authCtx.lang];
    const theme = GetTheme();

    function goFav() {
        navigation.navigate('profile');
    }

    return (
        <View style={styles.container(theme)}>
            <PageHeader title={translations.homePageHeader} func={goFav} name={'person'} size={30} theme={theme} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flex: 1,
        backgroundColor: theme === 'dark' ? GlobalStyles.colours.gray700 : GlobalStyles.colours.gray100,
    }),
});

export default Home;
