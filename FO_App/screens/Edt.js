import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const Edt = () => {
    const { listWrapper, buttonR, buttonC, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '430', company: 'BH2AB', companyName: 'FARPLAS OTOMATİV ANONİM ŞİRKETİ', edtName: 'Test Otomasyon Güncelleme', edtDescription: 'Test Otomasyon EDT Kaydı Günceleme', totalPayment: '0,00', currency: 'TL', ConfirmUser: 'samd1', ConfirmPayment: '1.234,00', ConfirmCurrency: 'TL', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: 'samd1' },
        { id: '2', text: '428', company: '0142S', companyName: 'FORD MOTOR COMPANY LTD', edtName: 'Test Otomasyon Güncelleme', edtDescription: 'Test Otomasyon EDT Kaydı Günceleme', totalPayment: '0,00', currency: 'TL', ConfirmUser: 'samd1', ConfirmPayment: '1.234,00', ConfirmCurrency: 'TL', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: 'samd1' },
        { id: '3', text: '427', company: 'GMUYB', companyName: 'YAZAKI SYSTEMS TECHNOLOGIES TURKEY OTOMOTIVE SAN VE TIC LTD SIRKETI', edtName: 'Test Otomasyon Güncelleme', edtDescription: 'Test Otomasyon EDT Kaydı Günceleme', totalPayment: '0,00', currency: 'TL', ConfirmUser: 'samd1', ConfirmPayment: '1.234,00', ConfirmCurrency: 'TL', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: 'samd1' },
        { id: '4', text: '381', company: 'CQKQB', companyName: 'HP PELZER PIMSA OTOMOTIV A.S.', edtName: 'Test 21.02.deneme ', edtDescription: 'Test 21.02 deneme', totalPayment: '0,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '123.456,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '5', text: '378', company: 'AS4FA', companyName: 'PLASCAM PLAS.OTO CAM SAN A.S.', edtName: 'Test SENEM 21.02', edtDescription: 'Test SENEM 21.02', totalPayment: '10,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '5.555,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '6', text: '378', company: 'AS4FA', companyName: 'PLASCAM PLAS.OTO CAM SAN A.S.', edtName: 'Test SENEM 21.02', edtDescription: 'Test Senem 21.02', totalPayment: '10,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '5.555,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Hayır', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '7', text: '374', company: '0142S', companyName: 'FORD MOTOR COMPANY LTD', edtName: 'ERCAN TEST', edtDescription: 'Deneme Test', totalPayment: '1508,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '880.000,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: 'samd1' },
        { id: '8', text: '369', company: 'CQKQB', companyName: 'HP PELZER PIMSA OTOMOTIV A.S.', edtName: 'Test Dökümanı 10.02 SENEM', edtDescription: 'Test Dökümanı 10.02 SENEM', totalPayment: '1000,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '500,00', ConfirmCurrency: 'TL', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '9', text: '365', company: 'GMRWA', companyName: 'FARAERO OTOMOTIV SANAYI VE TICARET A.S.', edtName: 'Deneme Yeni', edtDescription: 'tt', totalPayment: '0,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '100,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: '', projectManager: 'samd1' },
        { id: '10', text: '358', company: 'GMRWA', companyName: 'FARAERO OTOMOTIV SANAYI VE TICARET A.S.', edtName: 'Selcan Test', edtDescription: 'test', totalPayment: '10.000,00', currency: 'TR', ConfirmUser: 'samd1', ConfirmPayment: '15.000,00', ConfirmCurrency: 'TL', DeleteConfirm: 'Evet', ComponentConfirm: 'Hayır', edtDocs: 'Dökmanlar', projectManager: 'samd1' },
        { id: '11', text: '355', company: 'BPPMA', companyName: 'SARIGOZOGLU HID.MAK.KALIP A.S.', edtName: 'Test Arda bppma', edtDescription: 'rerew', totalPayment: '0,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '50,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Hayır', edtDocs: 'Dökmanlar', projectManager: 'samd1' },
        { id: '12', text: '354', company: 'AS4FA', companyName: 'PLASCAM PLAS.OTO CAM SAN A.S.', edtName: 'Test Arda', edtDescription: 'test', totalPayment: '0,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '100,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Hayır', edtDocs: '', projectManager: 'samd1' },
        { id: '13', text: '346', company: 'AS4HB', companyName: 'FAURECIA POLIFLEKS SUP.PARK', edtName: 'V363 I PAD HOLDER EDT', edtDescription: 'KK31-R04444-A*', totalPayment: '528.042,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '528.042,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Evet', ComponentConfirm: 'Hayır', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '14', text: '286', company: 'BH2AB', companyName: 'FARPLAS OTOMATİV ANONİM ŞİRKETİ', edtName: 'V363 MCA COWL PLENUM', edtDescription: 'Toplam3234 ? finans efekti ile firmaya KK3118526 AA 0.0021115 ? olarak parça basında ödemesi yapılacatır', totalPayment: '8.284,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '286,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '15', text: '247', company: 'AS4FA', companyName: 'PLASCAM PLAS.OTO CAM SAN A.S', edtName: 'V362MCA RR WHEEL DEFLECTOR', edtDescription: 'V362MCA RR WHEEL DEFLECTOR (JK21-V104C20/1-A)', totalPayment: '49.905,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '49.905,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Evet', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '16', text: '243', company: 'AS4FA', companyName: 'PLASCAM PLAS.OTO CAM SAN A.S', edtName: 'V362MCA WHEEL ARC MOLDING', edtDescription: 'V362MCA WHEEL ARC MOLDING (JK21-V278L00/1-A/B/C)', totalPayment: '134.012,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '243,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Hayır', edtDocs: 'Dökmanlar', projectManager: '-' },
        { id: '17', text: '221', company: 'AS4FA', companyName: 'PLASCAM PLAS.OTO CAM SAN A.S', edtName: 'V362MCA BODY SIDE MOLDIGN', edtDescription: 'V362MCA BODY SIDE MOLDIGN (KK31-V278L00/1-A/C, KK31-V20780/1-A, KK31-V29427-A) TASARIMI DONAN AMA IPTAL OLAN RCD MOLDIN ED&T ODEMESI MUHENDISLIK ONAYI ILE ICINDE', totalPayment: '183.728,00', currency: 'EUR', ConfirmUser: 'samd1', ConfirmPayment: '183.728,00', ConfirmCurrency: 'EUR', DeleteConfirm: 'Hayır', ComponentConfirm: 'Hayır', edtDocs: 'Dökmanlar', projectManager: '-' },
    ]

    const [selectedItem, setSelectedItem] = useState(null);

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
                            <ListItem name='arrow-right' Title={'Firma'} item={selectedItem.company} />
                            <ListItem name='arrow-right' Title={'Firma Adı'} item={selectedItem.companyName} />
                            <ListItem name='arrow-right' Title={'ED-T Adı'} item={selectedItem.edtName} />
                            <ListItem name='arrow-right' Title={'ED-T Açıklama'} item={selectedItem.edtDescription} />
                            <ListItem name='arrow-right' Title={'Mevcut Ödenecek Tutar'} item={selectedItem.totalPayment} />
                            <ListItem name='arrow-right' Title={'Mevcut Para Birimi'} item={selectedItem.currency} />
                            <ListItem name='arrow-right' Title={'Onay Bekleyen Kullanıcı'} item={selectedItem.ConfirmUser} />
                            <ListItem name='arrow-right' Title={'Onaylanacak Bedel'} item={selectedItem.ConfirmPayment} />
                            <ListItem name='arrow-right' Title={'Onaylanacak Para Birimi'} item={selectedItem.ConfirmCurrency} />
                            <ListItem name='arrow-right' Title={'EDT Silme Onaylı mı'} item={selectedItem.DeleteConfirm} />
                            <ListItem name='arrow-right' Title={'Parça Onaylı mı'} item={selectedItem.ComponentConfirm} />
                            <ListItem name='arrow-right' Title={'ED-T Dökümanı'} item={selectedItem.edtDocs} />
                            <ListItem name='arrow-right' Title={'Proje Müdürü'} item={selectedItem.projectManager} />
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

export default Edt