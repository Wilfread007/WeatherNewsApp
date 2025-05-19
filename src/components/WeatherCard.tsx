// src/components/WeatherCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ weather, unit }: { weather: any, unit: 'metric' | 'imperial' }) => {
  if (!weather) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Current Weather</Text>
      <Text style={styles.info}>🌡 Temperature: {weather.main.temp}° {unit === 'metric' ? 'C' : 'F'}</Text>
      <Text style={styles.info}>☁ Condition: {weather.weather[0].description}</Text>
      <Text style={styles.info}>💨 Wind: {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 10,
    marginVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  info: {
    fontSize: 16,
    marginVertical: 2
  }
});

export default WeatherCard;
