// src/components/MovieItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieItem = ({ title, poster }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieItem;