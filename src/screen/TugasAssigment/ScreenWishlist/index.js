import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { Card } from '@rneui/base';
import { WishlistContext } from '../../../TugasProvider';

const SettingScreen = ({ navigation }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const handleRemoveFromWishlist = (id) => {
    // Buat salinan baru dari wishlist tanpa item yang dihapus
    const updatedWishlist = wishlist.filter(item => item.imdbID !== id);
    // Perbarui state wishlist dengan salinan yang baru
    setWishlist(updatedWishlist);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
        keyExtractor={item => item.imdbID}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.Title}</Card.Title>
            <Card.Image source={{ uri: item.Poster }} style={styles.poster} />
            <Text style={styles.year}>{item.Year}</Text>
            <Button
              title="Remove"
              onPress={() => handleRemoveFromWishlist(item.imdbID)}
            />
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  year: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
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
});

export default SettingScreen;