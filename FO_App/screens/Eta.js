import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView, Button } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const Eta = () => {
    const { listWrapper, buttonR, buttonC, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '10054', etaDocs: 'Görütüle', supplier: 'ATTBA - B PLAS BURSA PL', program: 'B460 - ICA2', concern: 'C11904986', etaStatus: 'At Approval', approver: 'satmuh2', deadline: '32' },
        { id: '2', text: '10052', etaDocs: 'Görütüle', supplier: 'ATTBA - B PLAS BURSA PL', program: 'GCP 3870', concern: 'C11904986', etaStatus: 'At Approval', approver: 'satmuh2', deadline: '32' },
        { id: '3', text: '10051', etaDocs: 'Görütüle', supplier: 'ATTBA - B PLAS BURSA PL', program: 'B460 - ICA2', concern: 'C11904986', etaStatus: 'At Approval', approver: 'satmuh2', deadline: '32' },
        { id: '4', text: '10050', etaDocs: 'Görütüle', supplier: 'ATTBA - B PLAS BURSA PL', program: 'B460 - ICA2', concern: 'C11904986', etaStatus: 'At Approval', approver: 'satmuh2', deadline: '32' },
        { id: '5', text: '10049', etaDocs: 'Görütüle', supplier: 'ATTBA - B PLAS BURSA PL', program: 'B460 - ICA2', concern: 'C11904986', etaStatus: 'At Approval', approver: 'satmuh2', deadline: '32' },
        { id: '6', text: '10030', etaDocs: 'Görütüle', supplier: 'ATTBA - B PLAS BURSA PL', program: 'B460 - ICA2', concern: 'C11904986', etaStatus: 'At Approval', approver: 'satmuh2', deadline: '71' },
        { id: '7', text: '10025', etaDocs: 'Görütüle', supplier: 'ATTBA - B PLAS BURSA PL', program: 'GCP 3870', concern: 'C11904986', etaStatus: 'At Approval', approver: 'satmuh2', deadline: '151' }
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
                            <ListItem name='arrow-right' Title={'ETA Dökümanı'} item={selectedItem.etaDocs} />
                            <ListItem name='arrow-right' Title={'Tedarikçi'} item={selectedItem.supplier} />
                            <ListItem name='arrow-right' Title={'Program'} item={selectedItem.program} />
                            <ListItem name='arrow-right' Title={'Concern'} item={selectedItem.concern} />
                            <ListItem name='arrow-right' Title={'ETA Statüsü FO'} item={selectedItem.etaStatus} />
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
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        color: '#DEE2E6'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    pdf: {
        flex: 1
    }
})

export default Eta