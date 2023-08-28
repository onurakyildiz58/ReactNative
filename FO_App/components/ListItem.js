import React from "react"
import { StyleSheet, Text, View, ScrollView} from "react-native"
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const { title, modalDescription} = styles
    const { name, Title, item } = props
    return (
        <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
                <Feather name={name} size={30} color={'black'} />
                <Text style={title}>{Title}</Text>
            </View>
            <Text style={modalDescription}>{item}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    modalDescription: {
        fontSize: 15,
        color: '#525355',
        marginBottom: 20,
        marginHorizontal: 60
    }
})

export default ListItem