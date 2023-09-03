import React, { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import ConfirmBtn from "../components/ConfirmBtn"
import RejectBtn from "../components/RejectBtn"
import CloseBtn from '../components/CloseBtn'
import ListItem from "../components/ListItem"

const PsaSoba = () => {
    const { listWrapper, container, modalContainer, modalTitle, textContainer, header } = styles
    const data = [
        { id: '1', text: '100017', taskStatus: 'Action For RFQ', program: 'V362', platform: 'PHEV', supplier: '', productGroupName: 'CHASSIS', taskDate: '27.03.2020' },
        { id: '2', text: '100024', taskStatus: 'Action For RFQ', program: 'B460', platform: 'ICA2', supplier: '', productGroupName: 'AA', taskDate: '31.03.2020' },
        { id: '3', text: '100023', taskStatus: 'Action For RFQ', program: 'B460', platform: 'ICA2', supplier: '', productGroupName: 'ssd', taskDate: '31.03.2020' },
        { id: '4', text: '100028', taskStatus: 'Action For RFQ', program: 'V363', platform: 'BEV', supplier: '', productGroupName: 'chassis', taskDate: '31.03.2020' },
        { id: '5', text: '100029', taskStatus: 'Action For RFQ', program: 'V363', platform: 'BEV', supplier: '', productGroupName: 'deneme', taskDate: '31.03.2020' },
        { id: '6', text: '100026', taskStatus: 'Action For RFQ', program: 'GCB', platform: '3870', supplier: '', productGroupName: 'sdsd', taskDate: '31.03.2020' },
        { id: '7', text: '100026', taskStatus: 'Action For RFQ', program: 'GCB', platform: '3870', supplier: '', productGroupName: 'sdsd', taskDate: '19.06.2020' },
        { id: '8', text: '100156', taskStatus: 'Action For RFQ', program: 'V363', platform: 'BEV', supplier: '', productGroupName: 'Yeni Düzenlemeler', taskDate: '24.07.2020' },
        { id: '9', text: '100156', taskStatus: 'Action For RFQ', program: 'V363', platform: 'BEV', supplier: '', productGroupName: 'Yeni Düzenlemeler', taskDate: '24.07.2020' },
        { id: '10', text: '100172', taskStatus: 'Action For RFQ', program: 'V769-CRAIOVA', platform: 'ICE', supplier: '', productGroupName: 'chassis', taskDate: '04.08.2020' }
    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = ({ item }) => (
        <View style={listWrapper}>
            <TouchableOpacity style={{ width: 60 }} onPress={() => setSelectedItem(item)}>
                <Text>{item.text}</Text>
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
                        <View style={header}>
                            <Text style={modalTitle}>{selectedItem.text}</Text>
                            <CloseBtn closeModal={closeModal} />
                        </View>

                        <ScrollView style={textContainer} alwaysBounceVertical={false}>
                            <ListItem name='arrow-right' Title={'Task Status'} item={selectedItem.taskStatus} />
                            <ListItem name='arrow-right' Title={'Program'} item={selectedItem.program} />
                            <ListItem name='arrow-right' Title={'Platform'} item={selectedItem.platform} />
                            <ListItem name='arrow-right' Title={'Tedarikçi'} item={selectedItem.supplier} />
                            <ListItem name='arrow-right' Title={'Ürün Grubu Adı'} item={selectedItem.productGroupName} />
                            <ListItem name='arrow-right' Title={'Task Date'} item={selectedItem.taskDate} />
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
        justifyContent: 'center',
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

export default PsaSoba