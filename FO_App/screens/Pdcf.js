import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const Pdcf = () => {
    const { listWrapper, container, modalContainer, modalTitle, textContainer, header } = styles
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
        <View><Text>a</Text></View>
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

export default Pdcf