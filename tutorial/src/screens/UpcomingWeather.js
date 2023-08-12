import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const data = [
    {
        dt_txt: "10.08.2023",
        main: {
            temp_max: 20,
            temp_min: 18,
        },
        weather: [
            {
                main: 'rainy',
            }
        ]
    },
    {
        dt_txt: "11.08.2023",
        main: {
            temp_max: 22,
            temp_min: 20,
        },
        weather: [
            {
                main: 'rainy',
            }
        ]
    },
    {
        dt_txt: "12.08.2023",
        main: {
            temp_max: 24,
            temp_min: 22,
        },
        weather: [
            {
                main: 'rainy',
            }
        ]
    }
]

const Empty = () => (
    <View>
        <Text>Empty</Text>
    </View>
)

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    const {container, bg, txt} = styles
    return (
        <SafeAreaView style={container} >
            <ImageBackground source={require('../../assets/bg.jpg')} style={bg}>

                <Text style={txt} >Upcoming Weather</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: 'cyan', height: 2, marginHorizontal: 10 }} />}
                    ListEmptyComponent={<Empty />}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue'
    },
    txt: {
        backgroundColor: 'skyblue',
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
