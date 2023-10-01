import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function IconBtn({name, size, color, onPress}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Ionicons name={name} size={size} color={color}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
      },
})

export default IconBtn