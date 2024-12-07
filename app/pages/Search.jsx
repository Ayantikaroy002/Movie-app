import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (query) => {
    if (!query) {
      setMovies([]);
      return;
    }

    setLoading(true);
   

    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setMovies(response.data);
    } catch (err) {
      console.log('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  const stripHtmlTags = (html) => {
    if (!html) return 'No description available.';
    return html.replace(/<[^>]*>/g, '');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      <View style={{ marginTop: 50, marginHorizontal: 10, }}>
        
        <View
          style={{
            backgroundColor: '#393333',
            marginVertical: 25,
            marginHorizontal: 10,
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TextInput
            style={{
              fontSize: 13,
              paddingLeft: 18,
              width: '85%',
              color: 'white',
            }}
            placeholder="Search Movies ..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <Ionicons style={{ paddingRight: 4 }} name="search-circle" size={45} color="white" />
        </View>

        {loading ? (
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Loading...</Text>
        )  : (
          <FlatList
            data={movies}
            keyExtractor={(item) => item.show.id.toString()}
            showsVerticalScrollIndicator={false}
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
                    width: '95%',
                    paddingBottom:15,
                  }}
                >
                  <Image
                    source={{
                      uri:
                        item.show.image?.medium ||
                        'https://via.placeholder.com/210x120?text=No+Image',
                    }}
                    style={{
                      width: '100%',
                      height: 250,
                      borderTopRightRadius: 15,
                      borderTopLeftRadius: 15,
                      resizeMode:'stretch'
                    }}
                  />

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      paddingTop: 9,
                      justifyContent: 'space-evenly',
                      gap: item.show.genres.length <= 2 ? 120 : 50,
                    }}
                  >
                    <Text style={{ color: 'white', fontWeight: '500' }}>
                      {item.show.genres.join(', ')}
                    </Text>

                    <View>
                      {item.show.rating.average ? (
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
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

                  <View style={{ paddingTop: 7, paddingVertical: 10, paddingHorizontal: 4 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                        marginLeft: 15,
                        textAlign: 'left',
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
        )}
      </View>
    </View>
  );
}
