import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const I_pus_parca = () => {
    const { listWrapper, buttonR, buttonC, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '100500', concern: 'C11906226', project: 'V347/8-OPD', docs: 'DYYYA - APK OTOMATİV SA', status: 'Action Requiered from Purchasing', approver: '', deadline: '800' },
        { id: '2', text: '2630', concern: 'C14363106', project: 'V769-ICE', docs: 'GNPHE - ', status: 'Action Requiered from Purchasing', approver: '', deadline: '800' },
        { id: '3', text: '1027', concern: 'C14039402', project: 'H62X-H625', docs: 'ATBTA - CANEL OTOMATİV', status: 'Action Requiered from Purchasing', approver: 'satmuh2', deadline: '' }
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
                            <ListItem name='arrow-right' Title={'Concern'} item={selectedItem.concern} />
                            <ListItem name='arrow-right' Title={'Project'} item={selectedItem.project} />
                            <ListItem name='arrow-right' Title={'GSDB / CRQ Dok.'} item={selectedItem.docs} />
                            <ListItem name='arrow-right' Title={'Durum'} item={selectedItem.status} />
                            <ListItem name='arrow-right' Title={'Onaycı'} item={selectedItem.approver} />
                            <ListItem name='arrow-right' Title={'Bekleme Süresi'} item={selectedItem.deadline} />
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

export default I_pus_parca