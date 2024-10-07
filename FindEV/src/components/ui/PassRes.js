/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';

import Input from '../auth/Input';
import Button from './Button';

import { GlobalStyles } from '../../utils/style/Color';
import { BlurView } from '@react-native-community/blur';

function PassRes({ modalVisible, modalTitle, func, label, onChange, value, btnFunc, btnLText, btnRText, theme }) {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisible}
        >
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
            />
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalheader}>
                        <Text style={styles.modalTitle(theme)}>{modalTitle}</Text>
                    </View>
                    <View style={styles.modalInputs}>
                        <Input
                            label={label}
                            onUpdateValue={onChange}
                            value={value}
                            keyboardType="email-address"
                            theme={theme}
                        />
                        <View style={styles.btnContainer}>
                            <Button style={styles.btnL} onPress={btnFunc} theme={theme}>{btnLText}</Button>
                            <Button style={styles.btnR} onPress={func} theme={theme}>{btnRText}</Button>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: '75%',
        justifyContent: 'center',
    },
    modalTitle: (theme) => ({
        color: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray900,
        textAlign: 'center',
        fontSize: 22,
        paddingHorizontal: 20,
        paddingBottom: 50,
    }),
    modalheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalInputs: {
        marginHorizontal: 20,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    btnContainer: {
        flexDirection: 'row',
    },
    btnL: {
        marginHorizontal: 10,
    },
    btnR: {
        marginHorizontal: 10,
        backgroundColor: GlobalStyles.colours.red500,
    },
});

export default PassRes;
