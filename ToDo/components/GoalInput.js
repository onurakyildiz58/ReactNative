import {View, TextInput} from 'react-native'

const GoalInput = (props) => {
    const {wrapper, input, pHolder, func, cap, correct } = props
    return (
        <View style={wrapper}>
            <TextInput
                style={input}
                placeholder={pHolder}
                onChangeText={func}
                autoCapitalize={cap}
                autoCorrect={correct}
            />
        </View>
    )
}

export default GoalInput