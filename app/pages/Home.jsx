import { View, ScrollView, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import axios from 'axios';

export default function Home() {
    const [movies, setMovies] = useState([]);  

    useEffect(() => {
      axios
        .get('https://api.tvmaze.com/search/shows?q=all') 
        .then(response => {
            setMovies(response.data); 
        })
        .catch(err => {
         console.log(err.message); 
        });
    }, []);
  
   

    return (
      <View style={{flex:1, backgroundColor:'#000000'}}>
        <StatusBar translucent backgroundColor={'transparent'}/>
        <ScrollView style={{ flex:1 }}>
        <Header movies={movies} />
        <MovieList movies={movies}  title="Continue watching" />
        <MovieList movies={movies}  title="Popular Show" />
        <MovieList movies={movies}  title="Trending Now" />
        <MovieList movies={movies}  title="Watch It Again" />
        </ScrollView>
      </View>
    );
}
