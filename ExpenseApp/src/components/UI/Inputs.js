import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

function Inputs({pHolder, func, value, editable}) {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                placeholder={pHolder}
                onChangeText={func}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={value}
                editable={editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginVertical: 5
    },
    input: {
        paddingVertical: 10,
        width: 300,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,       
    },
})

export default Inputs