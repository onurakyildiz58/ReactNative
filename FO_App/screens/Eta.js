import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'

const Eta = () => {
    const { listWrapper, buttonR, buttonC, buttonText, container, modalContainer, modalDescription, modalTitle, closeButton, textContainer, btn } = styles
    const data = [
        { id: '1', text: '10054', detail1: 'item 1.1 detail', detail2: 'item 1.2 detail' },
        { id: '2', text: '10052', detail1: 'item 2.1 detail', detail2: 'item 2.2 detail' },
        { id: '3', text: '10051', detail1: 'item 3.1 detail', detail2: 'item 3.2 detail' },
        { id: '4', text: '10050', detail1: 'item 4.1 detail', detail2: 'item 4.2 detail' },
        { id: '5', text: '10049', detail1: 'item 5.1 detail', detail2: 'item 5.2 detail' },
        { id: '6', text: '10030', detail1: 'item 6.1 detail', detail2: 'item 6.2 detail' },
        { id: '7', text: '10025', detail1: 'item 7.1 detail', detail2: 'item 7.2 detail' }
    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = ({ item }) => (
        <View style={listWrapper}>
            <TouchableOpacity onPress={() => setSelectedItem(item)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
            <RejectBtn
                buttonR={buttonR}
                btn={btn}
                buttonText={buttonText}
                title={'Reject'} 
                func={() => handleReject(item.id)}/>
            <ConfirmBtn
                buttonC={buttonC}
                btn={btn}
                buttonText={buttonText}
                title={'Reject'} 
                func={() => handleConfirm(item.id)}/>
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
                        <CloseBtn
                            closeButton={closeButton}
                            closeModal={closeModal}
                            name='x'
                            size={50}
                            color={'#343A40'} />
                        <View style={textContainer}>
                            <Text style={modalTitle}>{selectedItem.text}</Text>
                            <Text style={modalDescription}>{selectedItem.detail1}</Text>
                            <Text style={modalDescription}>{selectedItem.detail2}</Text>
                        </View>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 20
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
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
        borderRadius: 5
    },
    closeButton: {
        backgroundColor: '#DEE2E6',
        borderRadius: 5,
        alignItems: 'flex-end',
        padding: 10
    }
})

export default Eta