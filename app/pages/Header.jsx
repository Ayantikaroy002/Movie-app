import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ movies}) {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width; 

 
  return (
    <View style={{ height: 500, width: '100%' }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        horizontal
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('movie-detail', {
                course: item.show,
              })
            }
          >
            <View style={{ position: 'relative' }}>
              <Image
                source={{
                  uri: item.show.image?.original || 'https://via.placeholder.com/150',
                }}
                style={{
                  width: screenWidth, 
                  height: 500, 
                  resizeMode: 'cover',
                }}
              />
             
              <View
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: screenWidth - 30,
                }}
              >
               
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: '800',
                    padding: 5,
                  }}
                >
                  My List
                </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                  }}
                  onPress={() => console.log('Play pressed')}
                >
                  <Ionicons name="play" size={18} color="black" />
                  <Text style={{ marginLeft: 5, fontSize: 14, fontWeight: '600' }}>
                    Play
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: '800',
                    padding: 5,
                  }}
                >
                  Info
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
