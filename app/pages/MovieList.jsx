import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


export default function MovieList({ movies, title }) {
    const navigation = useNavigation();
  
    const stripHtmlTags = (html) => {
      return html ? html.replace(/<[^>]*>/g, '') : 'No description available.';
    };
  
    return (
      <ScrollView style={{ paddingTop: 30, paddingLeft: 10, paddingBottom: 10 }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
  
        <FlatList
          data={movies}
          keyExtractor={(item) => item.show.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('movie-detail', {
                  movie: item.show,
                })
              }
            >
              <View
                style={{
                  margin: 10,
                  borderRadius: 15,
                  backgroundColor: '#181818',
                  width: 200,
                  height: 430,
                }}
              >
                <Image
                  source={{
                    uri:
                      item.show.image?.medium 
                  }}
                  style={{
                    width: '100%',
                    height: 300,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                />
  
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 9,
                    justifyContent: 'space-evenly',
                    gap: item.show.genres?.length <= 1 ? 50 : 20,
                  }}
                >
                  <Text style={{ color: 'white', fontWeight: '500' }}>
                    {item.show.genres?.slice(0, 2).join(', ') || 'No Genres'}
                  </Text>
  
                  <View>
                    {item.show.rating?.average ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="star-sharp" size={18} color="white" />
                        <Text style={{ color: 'white', fontWeight: '500' }}>
                          {item.show.rating.average}
                        </Text>
                      </View>
                    ) : (
                      <Text style={{ color: 'white' }}>No rating</Text>
                    )}
                  </View>
                </View>
  
                <View style={{ paddingVertical: 10, paddingHorizontal: 4 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                      fontWeight: 'bold',
                      marginLeft: 15,
                    }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.show.name}
                  </Text>
  
                  <Text
                    style={{
                      marginTop: 5,
                      color: 'white',
                      paddingRight: 5,
                      paddingLeft: 10,
                    }}
                    numberOfLines={3}
                    ellipsizeMode="tail"
                  >
                    {stripHtmlTags(item.show.summary)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    );
  }
  
