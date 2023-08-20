import React from 'react'
import { StyleSheet, View, SafeAreaView, FlatList, ImageBackground, StatusBar } from 'react-native'
import ListItem from '../components/ListItem'

const Empty = () => (
    <View>
        <Text>Empty</Text>
    </View>
)

const UpcomingWeather = ({ weatherData }) => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    const { container, bg } = styles
    return (
        <SafeAreaView style={container} >
            <ImageBackground source={require('../../assets/bg.jpg')} style={bg}>
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: '#B7EFC5', height: 2 }} />}
                    ListEmptyComponent={<Empty />}
                />
            </ImageBackground>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
                hidden={true}
                translucent={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txt: {
        backgroundColor: '#B7EFC5',
        color: '#155D27',
        fontSize: 36,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10,
        paddingVertical: 8,
        marginHorizontal: 20,
        borderRadius: 5
    },
    bg: {
        flex: 1
    }
});

export default UpcomingWeather
