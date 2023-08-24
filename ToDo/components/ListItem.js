import {View, Text} from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const {textContainer, feather, Name, Size, Color, listText, text} = props
    return (
        <View style={textContainer}>
            <Feather style={feather} name={Name} size={Size} color={Color} />
            <Text style={listText}>
                {text}
            </Text>
        </View>
    )
}

export default ListItem