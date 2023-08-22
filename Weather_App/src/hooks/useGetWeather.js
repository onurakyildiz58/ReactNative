import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
            const data = await res.json();
            setWeather(data);
            setLoading(false);
        } catch (e) {
            setError('could not fetch');
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            await fetchWeatherData();
        })();
    }, [lat, lon]);

    return[loading, error, weather]
}


/*
{"coords": 
    {
        "accuracy": 1500, 
        "altitude": 0, 
        "altitudeAccuracy": 0, 
        "heading": 0, 
        "latitude": 40.7111339, 
        "longitude": 29.7916384, 
        "speed": 0
    }, 
"mocked": false, 
"timestamp": 1692310337840
}
*/ 