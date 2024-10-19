import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import MovieDetails from './MovieDetails';

const Stack = createNativeStackNavigator();

function NativeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Home} name="home" />
            <Stack.Screen component={MovieDetails} name="movieDetails" />
        </Stack.Navigator>
    );
}

export default NativeStack;

