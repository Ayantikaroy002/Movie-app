import { View,  Image } from 'react-native';
import React from 'react';

export default function SplashScreen() {
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
        <Image
          source={require('../../assets/images/netflix.webp')} 
          style={{ width: '100%', height: '95%', resizeMode: 'center' }}
        />
      </View>
    </View>
  );
}
