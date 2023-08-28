import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const Eskalasyon = () => {
    const { listWrapper, buttonR, buttonC, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '1068', supplier: 'GKUFA', supplierName: 'OPTIMAS OE SOLUTIONS BAGLANTI...', startDate: '01/03/2022', formType: 'Parça', formCreater: 'Ersin Tuna', confirmFlow: '3235' },
        { id: '2', text: '495', supplier: 'BSXJA', supplierName: 'KAREKOC', startDate: '01/03/2021', formType: 'Proje', formCreater: 'Varol Çavdar', confirmFlow: '403' }
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
                            <ListItem name='arrow-right' Title={'Tedarikçi'} item={selectedItem.supplier} />
                            <ListItem name='arrow-right' Title={'Tedarikçi Adı'} item={selectedItem.supplierName} />
                            <ListItem name='arrow-right' Title={'Yeni Eskalasyon Geçerlilik Başlangıç Tarihi'} item={selectedItem.startDate} />
                            <ListItem name='arrow-right' Title={'Form Tipi'} item={selectedItem.formType} />
                            <ListItem name='arrow-right' Title={'Form Oluşturan'} item={selectedItem.formCreater} />
                            <ListItem name='arrow-right' Title={'Onay Akışı'} item={selectedItem.confirmFlow} />
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

export default Eskalasyon