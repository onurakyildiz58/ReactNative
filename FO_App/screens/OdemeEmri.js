import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const OdemeEmri = () => {
    const [orderStatus, setOrderStatus] = useState('')
    const [paymenttype, setPaymentType] = useState('')
    const [selectedItem, setSelectedItem] = useState(null);
    const { listWrapper, buttonR, buttonC, container, modalContainer, modalTitle, textContainer, header } = styles

    console.log(orderStatus)
    console.log(paymenttype)

    const data = [
        { id: '1', text: '22721', detail: 'Detay', manufacturer: 'B PLAS BURSA PLASTIK SAN VE TIC A.S.', paymentDate: '10.08.2023', paymentType: 'Son Ödeme', paymentAmount: '1.809,84', status: 'Onayda', penalty: '' },
        { id: '2', text: '22558', detail: 'Detay', manufacturer: 'B PLAS BURSA PLASTIK SAN VE TIC A.S.', paymentDate: '28.06.2022', paymentType: 'Avans Ödeme', paymentAmount: '1.058,26', status: 'Onayda', penalty: '' }
    ]

    const renderItem = ({ item }) => (

        <View style={listWrapper}>
            <TouchableOpacity style={{ width: 60 }} onPress={() => setSelectedItem(item)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
            <RejectBtn
                buttonR={buttonR}
                func={() => handleReject(item.id)} />
            <ConfirmBtn
                buttonC={buttonC}
                func={() => handleConfirm(item.id)} />
        </View>
    )

    const closeModal = () => {
        setSelectedItem(null);
    }

    const handleReject = (itemId) => {
        console.log(`Button clicked for item ${itemId}`);
    }

    const handleConfirm = (itemId) => {
        console.log(`Button clicked for item ${itemId}`);
    }

    return (
        <SafeAreaView style={container}>
            <View style={{ flexDirection: 'row'}}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{fontSize: 16, marginLeft: 16}}>Ödeme Emri Durumu</Text>
                    <Picker
                        selectedValue={orderStatus}
                        style={{ height: 50, width: 150, backgroundColor: '#DEE2E6' }}
                        onValueChange={(statusValue, statusIndex) => setOrderStatus(statusValue)}
                    >
                        <Picker.Item label="Seçiniz" value="default" />
                        <Picker.Item label="Onayda" value="onayda" />
                        <Picker.Item label="Red" value="red" />
                    </Picker>
                </View>
                <View style={{ flexDirection: 'column'}}>
                    <Text style={{fontSize: 16, marginLeft: 24}}>Ödeme Türü</Text>
                    <Picker
                        selectedValue={paymenttype}
                        style={{ height: 50, width: 200, backgroundColor: '#DEE2E6', marginLeft: 8 }}
                        onValueChange={(paymentValue, paymentIndex) => setPaymentType(paymentValue)}
                    >
                        <Picker.Item label="Seçiniz" value="default" />
                        <Picker.Item label="Son Ödeme" value="sonodeme" />
                        <Picker.Item label="Avans Ödeme" value="avansodeme" />
                    </Picker>
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Modal
                animationType="slide"
                visible={selectedItem !== null}
                onRequestClose={closeModal}
            >
                {selectedItem && (
                    <View style={modalContainer}>
                        <View style={header}>
                            <Text style={modalTitle}>{selectedItem.text}</Text>
                            <CloseBtn closeModal={closeModal} />
                        </View>

                        <ScrollView style={textContainer} alwaysBounceVertical={false}>
                            <ListItem name='arrow-right' Title={'Detay'} item={selectedItem.detail} />
                            <ListItem name='arrow-right' Title={'İmalatçı'} item={selectedItem.manufacturer} />
                            <ListItem name='arrow-right' Title={'Ödeme Emri Tarihi'} item={selectedItem.paymentDate} />
                            <ListItem name='arrow-right' Title={'Ödeme Emri Türü'} item={selectedItem.paymentType} />
                            <ListItem name='arrow-right' Title={'Ödeme Tutarı'} item={selectedItem.paymentAmount} />
                            <ListItem name='arrow-right' Title={'Ödeme Emri Durumu'} item={selectedItem.status} />
                            <ListItem name='arrow-right' Title={'Ceza Tutarı'} item={selectedItem.penalty} />
                        </ScrollView>
                    </View>
                )}
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE2E6'
    },
    listWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 35,
        marginTop: 10
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#DEE2E6'
    },
    modalTitle: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    textContainer: {
        flex: 1
    },
    buttonR: {
        backgroundColor: '#e44040'
    },
    buttonC: {
        backgroundColor: '#236997'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    }
})

export default OdemeEmri