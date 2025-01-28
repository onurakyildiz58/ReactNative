import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import PageHeader from '../components/ui/PageHeader';

import { GlobalStyles } from '../utils/styles/Color';

import { LanguageContext } from '../utils/ContextAPI/LanguageContext';
import { languages } from '../utils/languages/Language';
import Button from '../components/ui/Button';
import {AuthContext} from '../utils/ContextAPI/AuhtContext';

const translationMap = {
    TR: languages[0],
    ENG: languages[1],
};

function Home() {
    const langCtx = useContext(LanguageContext);
    const authCtx = useContext(AuthContext);
    const translations = translationMap[langCtx.lang];

    function goFav() {
        console.log("object");
    }

    return (
        <View style={styles.container}>
            <PageHeader title={translations.homePageHeader} func={goFav} name={'person'} size={30} />
            <Button onPress={authCtx.logout}>logout</Button>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colours.gray100,
    },
});

export default Home;