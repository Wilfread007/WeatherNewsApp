import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';

export default function SettingsScreen() {
  const { unit, setUnit } = useContext(SettingsContext);

  return (
    <View>
      <Text>Temperature Unit: {unit === 'metric' ? 'Celsius' : 'Fahrenheit'}</Text>
      <Button title="Toggle Unit" onPress={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')} />
    </View>
  );
}
