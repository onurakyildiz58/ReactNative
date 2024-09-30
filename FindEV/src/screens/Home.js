/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import PageHeader from '../components/ui/PageHeader';

import { AuthContext } from '../utils/store/contextAuth';
import { languages } from '../utils/language/Language';

const translationMap = {
    TR: languages[0],
    ENG: languages[1],
};

function Home({ navigation }) {
    const authCtx = useContext(AuthContext);
    const translations = translationMap[authCtx.lang];

    function goFav() {
        navigation.navigate('profile');
    }

    return (
        <View style={styles.container}>
            <PageHeader title={translations.homePageHeader} func={goFav} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;
