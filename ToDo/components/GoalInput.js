const GoalInput = () => {
    return (
        <View style={wrapper}>
            <TextInput
                style={input}
                placeholder='Enter Note'
                onChangeText={getTextHandler}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    )
}

export default GoalInput