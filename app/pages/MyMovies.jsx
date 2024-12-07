import { View, Text } from 'react-native';
import React from 'react';

export default function MyMovies() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>My Movies</Text>
    </View>
  );
}
