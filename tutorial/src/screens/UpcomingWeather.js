import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'

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

const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'black'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <Item
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground source={require('../../assets/bg.jpg')} style={styles.bg}>
                
                <Text style={styles.txt} >Upcoming Weather</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: 'cyan', height: 2 ,marginHorizontal: 10}} />}
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
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: 'powderblue',
        borderRadius: 8
    },
    temp: {
        color: 'black',
        fontSize: 20
    },
    date: {
        color: 'black',
        fontSize: 15
    },
    bg: {
        flex:1
    }
});

export default UpcomingWeather
