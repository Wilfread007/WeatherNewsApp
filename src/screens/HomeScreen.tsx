import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { getWeather } from '../services/weatherService';
import { getNews } from '../services/newsService';
import { SettingsContext } from '../context/SettingsContext';
import { filterNewsByWeather } from '../utils/filterNewsByWeather';

export default function HomeScreen() {
    const [weather, setWeather] = useState(null);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { unit } = useContext(SettingsContext);
    console.log(unit);

    useEffect(() => {
        (async () => {
            console.log("test");

            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;
            const location = await Location.getCurrentPositionAsync({});
            console.log(location);

            const weatherData = await getWeather(location.coords.latitude, location.coords.longitude, unit);
            //   console.log(weatherData);

            const newsData = await getNews();
            const filteredNews = filterNewsByWeather(newsData.articles, weatherData.main.temp);
            setWeather(weatherData);
            console.log(filteredNews);

            setNews(filteredNews);
            setLoading(false);
        })();
    }, [unit]);

    if (loading) return <ActivityIndicator size="large" />;

    return (
        <ScrollView>
            <Text>🌤️ Weather: {weather.weather[0].description}</Text>
            <Text>🌡 Temp: {weather.main.temp}°</Text>
            <Text>📰 News:</Text>
            {news.length === 0 ? (
                <Text>No matching news found for this weather.</Text>
            ) : (
                news.map((item, i) => (
                    <View key={i}>
                        <Text>{item.title}</Text>
                    </View>
                ))
            )}

        </ScrollView>
    );
}
