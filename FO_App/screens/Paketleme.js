import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const Paketleme = () => {
    const { listWrapper, buttonR, buttonC, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '295', supplier: 'ATBBA', component: 'BK31 10626 AB', location: 'FWALC', katSayi: '4', packageType: 'IMC010', startDate: '01/01/2022', status: 'Aktif', akisNo: '100146', hesapDate: '01/09/2022', price: '73.717,1', currency: ''  }
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
                            <ListItem name='arrow-right' Title={'Parça'} item={selectedItem.component} />
                            <ListItem name='arrow-right' Title={'Lokasyon'} item={selectedItem.location} />
                            <ListItem name='arrow-right' Title={'Kullanılan Kat Sayısı'} item={selectedItem.katSayi} />
                            <ListItem name='arrow-right' Title={'Paketleme Tipi'} item={selectedItem.packageType} />
                            <ListItem name='arrow-right' Title={'Analiz Başlangıç Tarihi'} item={selectedItem.startDate} />
                            <ListItem name='arrow-right' Title={'Durum'} item={selectedItem.status} />
                            <ListItem name='arrow-right' Title={'Akış No'} item={selectedItem.akisNo} />
                            <ListItem name='arrow-right' Title={'Analiz Hesap Tarihi'} item={selectedItem.hesapDate} />
                            <ListItem name='arrow-right' Title={'Analiz Fiyatı'} item={selectedItem.price} />
                            <ListItem name='arrow-right' Title={'Para Birimi'} item={selectedItem.currency} />
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

export default Paketleme