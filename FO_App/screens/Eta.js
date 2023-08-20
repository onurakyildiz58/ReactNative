import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal } from 'react-native'

const Eta = () => {
    const {listWrapper, button, buttonText, container, modalContainer, modalDescription, modalTitle, closeButton, closeButtonText } = styles
    const data = [
        { id: '1', text: '10054', detail: 'item 1 detail' },
        { id: '2', text: '10052', detail: 'item 2 detail' },
        { id: '3', text: '10051', detail: 'item 3 detail' },
        { id: '4', text: '10050', detail: 'item 4 detail' },
        { id: '5', text: '10049', detail: 'item 5 detail' },
        { id: '6', text: '10030', detail: 'item 6 detail' },
        { id: '7', text: '10025', detail: 'item 7 detail' }
    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = ({ item }) => (
        <View style={listWrapper}>
            <TouchableOpacity onPress={() => setSelectedItem(item)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => handleReject(item.id)}>
                <Text style={buttonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => handleConfirm(item.id)}>
                <Text style={buttonText}>Confirm</Text>
            </TouchableOpacity>
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
                        <Text style={modalTitle}>{selectedItem.text}</Text>
                        <Text style={modalDescription}>{selectedItem.detail}</Text>
                        <TouchableOpacity style={closeButton} onPress={closeModal}>
                            <Text style={closeButtonText}>Close</Text>
                        </TouchableOpacity>
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
    button: {
        backgroundColor: '#3498db',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 14
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEE2E6'
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 20
    },
    closeButton: {
        backgroundColor: '#3498db',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16
    }
})

export default Eta