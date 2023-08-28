import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const Rework = () => {
    const { listWrapper, buttonR, buttonC, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '634', gsdb: 'AS3TC', supplier: 'OTOTRIM PANEL SANAYİ VE TİCARET AS', status: 'Onayda', purchasing_manager: 'bbugur, satmuh2', approval: 'Detayı Gör', fallowType: 'Bitiş Tarihi Takibi', paymentValue: '0', currencyType: '', paymentQuantity: '0', isComponentApproved: 'Evet' },
        { id: '2', text: '633', gsdb: '3F126', supplier: 'ÖZBAYRAK KIZAK KORUMA SİSTEMLERİ END.MAK.SAN.TİC.A...', status: 'Onayda', purchasing_manager: 'iuzun3, satmuh2', approval: 'Detayı Gör', fallowType: 'Bitiş Tarihi Takibi', paymentValue: '0', currencyType: '', paymentQuantity: '0', isComponentApproved: 'Evet' },
        { id: '3', text: '575', gsdb: '0142S', supplier: 'FORD MOTOR COMPANY LTD', status: 'Onayda', purchasing_manager: 'satmuh2, vcavdar', approval: 'Detayı Gör', fallowType: 'Bitiş Tarihi Takibi', paymentValue: '0', currencyType: '', paymentQuantity: '0', isComponentApproved: 'Evet' },
        { id: '4', text: '163', gsdb: 'ATBBA', supplier: 'B PLAS BURSA PLASTİK SAN. VE TİC. AS', status: 'Onayda', purchasing_manager: 'satmuh2, satmuh2', approval: 'Detayı Gör', fallowType: 'Bitiş Tarihi Takibi', paymentValue: '0', currencyType: '', paymentQuantity: '0', isComponentApproved: 'Evet' }
    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = ({ item }) => (
        <View style={listWrapper}>
            <TouchableOpacity onPress={() => setSelectedItem(item)}>
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
                            <ListItem name='arrow-right' Title={'GSDB'} item={selectedItem.gsdb} />
                            <ListItem name='arrow-right' Title={'Tedarikçi'} item={selectedItem.supplier} />
                            <ListItem name='arrow-right' Title={'Statü'} item={selectedItem.status} />
                            <ListItem name='arrow-right' Title={'Satınalma Sorumluları'} item={selectedItem.purchasing_manager} />
                            <ListItem name='arrow-right' Title={'Onay Dolaşımı'} item={selectedItem.approval} />
                            <ListItem name='arrow-right' Title={'Takip Tipi'} item={selectedItem.fallowType} />
                            <ListItem name='arrow-right' Title={'Ödenecek Toplam Tutar'} item={selectedItem.paymentValue} />
                            <ListItem name='arrow-right' Title={'Para Birimi'} item={selectedItem.currencyType} />
                            <ListItem name='arrow-right' Title={'Ödenecek Toplam Adet'} item={selectedItem.paymentQuantity} />
                            <ListItem name='arrow-right' Title={'Parça Onayı mı'} item={selectedItem.isComponentApproved} />
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
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        color: '#DEE2E6'
    },
    closeButton: {
        backgroundColor: '#DEE2E6'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    }
})

export default Rework