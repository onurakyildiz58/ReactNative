import React from "react"
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Soba_sc_cpa_onay = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>SOBA/SC - CPA Onay</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontWeight: '500',
        fontSize: 32,
    }
})

export default Soba_sc_cpa_onay