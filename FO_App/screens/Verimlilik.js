import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'

import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"
import PDFitem from '../components/PDFitem'

const Verimlilik = () => {
    const { listWrapper, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '551', company: 'ATBBA', companyName: 'B PLAS BURSA PLASTİK SAN. VE TİC. A.S.', faxDate: '04.03.2023', faxPayment: '111,00', currencyType: 'TL', currency: '1,00', description: 'test otomasyon', approvalStatus: 'Bekliyor', approvalDate: '03.03.2023 16:44:56', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh2', prodOwner: 'samd1' },
        { id: '2', text: '521', company: 'AS4HA', companyName: 'FAURECIA POLIFLEX OTO.SAN A.S.', faxDate: '12.08.2022', faxPayment: '25,00', currencyType: 'EUR', currency: '1,00', description: '', approvalStatus: 'Bekliyor', approvalDate: '23.09.2022 09:42:26', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh1', prodOwner: 'sagemuya' },
        { id: '3', text: '522', company: 'AS4HA', companyName: 'FAURECIA POLIFLEX OTO.SAN A.S.', faxDate: '12.08.2022', faxPayment: '700,00', currencyType: 'EUR', currency: '1,00', description: '', approvalStatus: 'Bekliyor', approvalDate: '23.09.2022 16:43:41', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh1', prodOwner: 'sagemuya' },
        { id: '4', text: '547', company: 'ATBBA', companyName: 'B PLAS BURSA PLASTİK SAN. VE TİC. A.S.', faxDate: '28.02.2023', faxPayment: '100.000,00', currencyType: 'TL', currency: '1,00', description: 'ASDASDASD', approvalStatus: 'Bekliyor', approvalDate: '28.02.2023 17:17:19', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh2', prodOwner: 'samd1' },
        { id: '5', text: '510', company: 'AS4HB', companyName: 'FAURECIA POLIFLEX SUP.PARK', faxDate: '01.03.2022', faxPayment: '2.000,00', currencyType: 'EUR', currency: '10,00', description: '', approvalStatus: 'Bekliyor', approvalDate: '13.10.2022 11:22:12', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh1', prodOwner: 'sagemuya' },
        { id: '6', text: '535', company: 'AS4HB', companyName: 'FAURECIA POLIFLEX SUP.PARK', faxDate: '01.03.2022', faxPayment: '1,00', currencyType: 'EUR', currency: '1,00', description: 'TEST', approvalStatus: 'Bekliyor', approvalDate: '31.10.2022 16:36:51', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh1', prodOwner: 'sagemuya' },
        { id: '7', text: '536', company: 'AS4HB', companyName: 'FAURECIA POLIFLEX SUP.PARK', faxDate: '01.03.2022', faxPayment: '1,00', currencyType: 'USD', currency: '1,00', description: 'test otomasyon', approvalStatus: 'Bekliyor', approvalDate: '31.10.2023 16:38:04', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh1', prodOwner: 'sagemuya' },
        { id: '8', text: '563', company: '3E516', companyName: 'ELIMKO LTD', faxDate: '22.06.2023', faxPayment: '900,00', currencyType: 'HUF', currency: '1,00', description: 'ASDASDASD', approvalStatus: 'Bekliyor', approvalDate: '22.06.2023 16:45:01', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh2', prodOwner: 'samd1' },
        { id: '9', text: '564', company: '3E516', companyName: 'ELIMKO LTD', faxDate: '22.06.2023', faxPayment: '500,00', currencyType: 'TL', currency: '1,00', description: 'ASDASDASD', approvalStatus: 'Bekliyor', approvalDate: '22.06.2023 16:46:18', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh2', prodOwner: 'samd1' },
        { id: '10', text: '565', company: '3E516', companyName: 'ELIMKO LTD', faxDate: '22.06.2023', faxPayment: '200,00', currencyType: 'TL', currency: '1,00', description: 'ASADADASD', approvalStatus: 'Bekliyor', approvalDate: '22.06.2023 16:47:37', faxDocs: 'CRSOriginalDocument.pdf', companyManager: 'satmuh2', prodOwner: 'samd1' }
    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = ({ item }) => (
        <View style={listWrapper}>
            <TouchableOpacity style={{ width: 60 }} onPress={() => setSelectedItem(item)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
            <RejectBtn />
            <ConfirmBtn />
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
                            <ListItem name='arrow-right' Title={'Fatura Tarihi'} item={selectedItem.faxDate} />
                            <ListItem name='arrow-right' Title={'Fatura Tutarı'} item={selectedItem.faxPayment} />
                            <ListItem name='arrow-right' Title={'Para Birimi'} item={selectedItem.currencyType} />
                            <ListItem name='arrow-right' Title={'Kur'} item={selectedItem.currency} />
                            <ListItem name='arrow-right' Title={'Açıklama'} item={selectedItem.description} />
                            <ListItem name='arrow-right' Title={'Onay Statüsü'} item={selectedItem.approvalStatus} />
                            <ListItem name='arrow-right' Title={'Onay İsteme Tarihi'} item={selectedItem.approvalDate} />
                            <PDFitem name='arrow-right' Title={'Fatura Dökümanı'} item={selectedItem.faxDocs} url={'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'} />
                            <ListItem name='arrow-right' Title={'Firma Sorumlusu'} item={selectedItem.companyManager} />
                            <ListItem name='arrow-right' Title={'Ürün Müdürü'} item={selectedItem.prodOwner} />
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    }
})

export default Verimlilik