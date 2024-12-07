import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MovieDetail({ route, navigation }) {

  const { movie } = route.params;

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>/g, '');
  };

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
        <TouchableOpacity style={{ paddingBottom: 15 }} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>

        <View style={{ backgroundColor: '#181818', paddingBottom: 20, borderRadius: 15 }}>

          <Image
            source={{ uri: movie.image?.medium }}
            style={{
              width: Dimensions.get('screen').width * 0.89,
              height: 450,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              resizeMode: 'cover',
            }}
          />

          <Text style={{ fontSize: 35, marginTop: 20, marginLeft:20, fontWeight: 'bold', color: 'white' }}>
            {movie.name}
          </Text>

          <View>
            <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 15, fontWeight: '700', color: 'white' }}>
              Summary
            </Text>
            <Text style={{ marginLeft:15, lineHeight: 20, fontFamily: 'ubuntuRegular', color: 'white' }}>
              {stripHtmlTags(movie.summary)} 
            </Text>
          </View>

          <View style={{ marginTop: 10, marginLeft:15, }}>
          <Text style={{ color: 'white', marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize:16 }}>Language: </Text>
              {movie.language}
            </Text>
            <Text style={{ color: 'white', marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize:16 }}>Genres: </Text>
              {movie.genres.join(', ')}
            </Text>
            <Text style={{ color: 'white', marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize:16 }}>Rating: </Text>
              {movie.rating.average ? movie.rating.average : 'No rating available'}
            </Text>
            <Text style={{ color: 'white', marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize:16 }}>Status: </Text>
              {movie.status}
            </Text>
            <Text style={{ color: 'white', marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize:16 }}>Premiered: </Text>
              {movie.premiered}
            </Text>
          </View>

          <View>
            <TouchableOpacity
              style={{
                padding: 15,
                borderRadius: 15,
                backgroundColor: 'black',
                marginHorizontal: 30,
                marginTop:25,
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 20, color: '#ffffff' }}>
                Watch Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
