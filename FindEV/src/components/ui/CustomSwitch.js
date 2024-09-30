/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';

function CustomSwitch({ title, func, value }) {
    return (
        <View style={styles.switchContainer}>
            <Text style={styles.label}>{title}</Text>
            <Switch
                style={styles.switch}
                trackColor={{ false: GlobalStyles.colours.gray400, true: GlobalStyles.colours.green200 }}
                thumbColor={value ? GlobalStyles.colours.green500 : GlobalStyles.colours.gray700}
                onValueChange={func}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        color: GlobalStyles.colours.gray700,
        marginBottom: 10,
    },
    switch:{
        marginBottom: 10,
    },
});

export default CustomSwitch;
