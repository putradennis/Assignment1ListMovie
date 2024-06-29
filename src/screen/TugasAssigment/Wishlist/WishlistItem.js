import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from '@rneui/base';

const DetailItemScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{item.Title}</Card.Title>
        <Card.Image
          source={{
            uri: item.Poster,
          }}
          style={styles.poster}
        />
        <Text style={styles.year}>{item.Year}</Text>
        <Text style={styles.description}>{item.Plot}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
 container: {
      padding: 10,
    },
    card: {
      marginBottom: 20,
    },
    title: {
       fontSize: 19,
       fontWeight: 'bold',
       textAlign: 'center',
       marginBottom: 20,
    },
    poster: {
       width: 340,
       height: 300,
       marginRight: 20,
       //padding: 20,
       justifyContent: 'center',
       marginBottom: 5,
       resizeMode: 'contain', // Untuk memastikan gambar tetap proporsional
    },
    year: {
       fontSize: 18,
       color: '#666',
       fontWeight: 'bold',
       textAlign: 'center',
    },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default DetailItemScreen;