import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Your Notes</Text>
        </View>
    )
}

export default header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "10%",
        backgroundColor: "skyblue",
        padding: 30,
    },
    headerText: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 10,
    }
});

