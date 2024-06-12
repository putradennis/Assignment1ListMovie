import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MovieItem from '../components/MovieItem';

const MovieListScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?s=batman&apikey=1cde1038');
      const data = await response.json();
      setMovies(data.Search);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <MovieItem title={item.Title} poster={item.Poster} year={item.Year} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.imdbID}
        onRefresh={fetchMovies}
        refreshing={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default MovieListScreen;
