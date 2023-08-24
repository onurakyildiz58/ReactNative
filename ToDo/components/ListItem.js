const ListItem = () => {
    return (
        <View style={textContainer}>
            <Feather style={{ marginRight: 10 }} name='target' size={20} color={'black'} />
            <Text style={{ fontWeight: '500' }}>
                {itemData.item.text}
            </Text>
        </View>
    )
}

export default ListItem