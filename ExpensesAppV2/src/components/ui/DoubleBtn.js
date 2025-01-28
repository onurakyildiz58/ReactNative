import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';

function DoubleButton({ textLeft, textRight, onPressL, onPressR, activeSide }) {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
                style={[styles.btn, styles.buttonL, activeSide === 'left' && styles.activeBtn]}
                onPress={onPressL}
            >
                <Text style={[styles.buttonText, activeSide === 'left' && styles.activeText]}>
                    {textLeft}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, styles.buttonR, activeSide === 'right' && styles.activeBtn]}
                onPress={onPressR}
            >
                <Text style={[styles.buttonText, activeSide === 'right' && styles.activeText]}>
                    {textRight}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    btn:{
        width: '50%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 5,
        backgroundColor: GlobalStyles.colours.green100,
        elevation: 20,
        shadowColor: GlobalStyles.colours.black,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderColor: GlobalStyles.colours.black,
    },
    buttonL: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    buttonR: {
        borderWidth: 1,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
    },
    activeBtn: {
        backgroundColor: GlobalStyles.colours.green900,
    },
    buttonText: {
        textAlign: 'center',
        color: GlobalStyles.colours.gray900,
        fontSize: 20,
        fontWeight: 'bold',
    },
    activeText: {
        color: GlobalStyles.colours.gray100,
    },
});

export default DoubleButton;