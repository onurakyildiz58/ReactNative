/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';
import Icon from './Icon';

function PageHeader({ title, func }) {
    return (
        <View style={[styles.header, styles.shadow]}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={func}>
                <Icon name={'star'} size={25} color={GlobalStyles.colours.black} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: GlobalStyles.colours.green500,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 25,
        marginBottom: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalStyles.colours.gray800,
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
