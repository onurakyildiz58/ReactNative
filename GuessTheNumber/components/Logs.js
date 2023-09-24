import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Color from "../utils/Color"

const Logs = ({round, guess}) => {
    return (
        <View style={styles.list}>
            <Text>
                #{round}
            </Text>
            <Text>
                Phone Guess : {guess}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        borderColor: Color.black,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Color.green300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 6,
        shadowColor: Color.black,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 8
    }
})

export default Logs