import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { GlobalStyles } from '../../utils/styles/Color';

import IconBtn from './IconBtn';

function PageHeader({ title, func, name, size }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.header, styles.shadow]}>
                <Text style={styles.headerText}>{title}</Text>
                <IconBtn func={func} name={name} size={size} color={GlobalStyles.colours.gray100} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: GlobalStyles.colours.gray100,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: GlobalStyles.colours.gray100,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalStyles.colours.gray900,
    },
    shadow: {
        shadowColor: GlobalStyles.colours.black,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 20,
    },
});

export default PageHeader;
