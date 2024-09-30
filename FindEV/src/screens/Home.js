/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PageHeader from '../components/ui/PageHeader';

function Home({ navigation }) {
    function goFav() {
        navigation.navigate('profile');
    }

    return (
        <View style={styles.container}>
            <PageHeader title={'Home'} func={goFav} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;
