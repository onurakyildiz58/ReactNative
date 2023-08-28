import React from "react"
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
 
const ConfirmBtn = (props) => {
    const { closeModal } = props
    return (
        <TouchableOpacity style={{backgroundColor: '#DEE2E6'}} onPress={closeModal}>
            <Feather name='x' size={50} color={'#343A40'}/>
        </TouchableOpacity>
    )
}


export default ConfirmBtn