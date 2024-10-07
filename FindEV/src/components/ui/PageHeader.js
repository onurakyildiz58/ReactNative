/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';

import IconBtn from './IconBtn';

function PageHeader({ title, func, name, size, theme }) {
    return (
        <View style={[styles.header(theme), styles.shadow]}>
            <Text style={styles.headerText}>{title}</Text>
            <IconBtn func={func} name={name} size={size} color={GlobalStyles.colours.gray100} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: (theme) => ({
        flexDirection: 'row',
        backgroundColor: theme === 'dark' ? GlobalStyles.colours.black : GlobalStyles.colours.green500,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 25,
        marginBottom: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }),
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalStyles.colours.gray100,
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
