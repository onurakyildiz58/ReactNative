import React from "react"
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'royalblue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: 'powderblue'
            },
            headerStyle: {
                backgroundColor: 'powderblue'
            },
            headerTitleStyle: {
                fontWeight: '700',
                fontSize: 30,
                color: 'black'
            }
        }} >
            <Tab.Screen name='Current' component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (<Feather name='droplet' size={30} color={focused ? 'royalblue' : 'black'} />)
                }} />
            <Tab.Screen name='Upcoming' component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (<Feather name='clock' size={30} color={focused ? 'royalblue' : 'black'} />)
                }} />
            <Tab.Screen name='City' component={City}
                options={{
                    tabBarIcon: ({ focused }) => (<Feather name='home' size={30} color={focused ? 'royalblue' : 'black'} />)
                }} />
        </Tab.Navigator>
    )
}

export default Tabs
