import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieItem = ({ title, poster, year }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  poster: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  year: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default MovieItem;
