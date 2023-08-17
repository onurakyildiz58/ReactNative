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
            tabBarActiveTintColor: '#B7EFC5',
            tabBarInactiveTintColor: '#10451D',
            tabBarStyle: {
                backgroundColor: '#155D27'
            },
            headerStyle: {  
                backgroundColor: '#155D27'
            },
            headerTitleStyle: {
                fontWeight: '700',
                fontSize: 30,
                color: '#B7EFC5'
            }            
        }} >
            <Tab.Screen name='Current' component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (<Feather name='droplet' size={30} color={focused ? '#B7EFC5' : '#10451D'} />)
                }} />
            <Tab.Screen name='Upcoming' component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (<Feather name='clock' size={30} color={focused ? '#B7EFC5' : '#10451D'} />)
                }} />
            <Tab.Screen name='City' component={City}
                options={{
                    tabBarIcon: ({ focused }) => (<Feather name='home' size={30} color={focused ? '#B7EFC5' : '#10451D'} />)
                }} />
        </Tab.Navigator>
    )
}

export default Tabs
