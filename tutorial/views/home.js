import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const home = () => {
    return (
        <View style={styles.home}>
            <view>
                <Text>Add Note</Text>
            </view>
            <view>
                <Text>All Notes</Text>
            </view>
        </View>
    )
}

export default home;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "20%",
    },
});