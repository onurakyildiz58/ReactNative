import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const Ipos = () => {
    const { listWrapper, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '345183', supplierCompany: 'ATBBA - B PLAS BURSA PLASTİK SAN VE TİC A.S.', prefix: '1S7A', base: 'F431K99', suffix: 'AB', status: 'Onayda', projectCode: 'B460', content: 'Birim Fiyat', purchasingEng: 'satmuh2', approvalDate: '21.08.2023 11:35:13' },
        { id: '2', text: '345129', supplierCompany: 'ATBBA - B PLAS BURSA PLASTİK SAN VE TİC A.S.', prefix: 'GC46', base: '16C581', suffix: 'CD', status: 'Onayda', projectCode: 'V769', content: 'Kalıp', purchasingEng: 'satmuh2', approvalDate: '21.08.2023 11:42:57' }
    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = ({ item }) => (
        <View style={listWrapper}>
            <TouchableOpacity onPress={() => setSelectedItem(item)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
            <RejectBtn />
            <ConfirmBtn />
        </View>
    )

    const closeModal = () => {
        setSelectedItem(null);
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
                            <ListItem name='arrow-right' Title={'Tedarik Edilen Firma Bilgileri'} item={selectedItem.supplierCompany} />
                            <ListItem name='arrow-right' Title={'Prefix'} item={selectedItem.prefix} />
                            <ListItem name='arrow-right' Title={'Base'} item={selectedItem.base} />
                            <ListItem name='arrow-right' Title={'Suffix'} item={selectedItem.suffix} />
                            <ListItem name='arrow-right' Title={'Statü'} item={selectedItem.status} />
                            <ListItem name='arrow-right' Title={'Proje Kodu'} item={selectedItem.projectCode} />
                            <ListItem name='arrow-right' Title={'Teyit İçeriği'} item={selectedItem.content} />
                            <ListItem name='arrow-right' Title={'Satınalma Mühendisi'} item={selectedItem.purchasingEng} />
                            <ListItem name='arrow-right' Title={'Onay Gelme Tarihi'} item={selectedItem.approvalDate} />
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

export default Ipos