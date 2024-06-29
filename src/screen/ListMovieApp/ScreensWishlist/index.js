import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { Card } from '@rneui/base';
import { WishlistContext } from '../ProviderList';
import { db } from '../configFirebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';

const SettingScreen = ({ navigation }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const [loading, setLoading] = useState(true);
  const [fetchWishlist, setFetchWishlist] = useState(null); // State untuk menyimpan fungsi fetchWishlistFromFirestore

  useEffect(() => {
    // Memuat data wishlist dari Firebase Firestore saat komponen dimuat pertama kali
    const fetchInitialData = async () => {
      try {
        const fireStoreCollection = collection(db, 'tugas3api');
        const querySnapshot = await getDocs(fireStoreCollection);
        const fetchedWishlist = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWishlist(fetchedWishlist);
        setLoading(false);
      } catch (error) {
        console.warn('Error fetching wishlist: ', error);
        setLoading(false);
      }
    };

    // Panggil fetchInitialData untuk memuat data saat pertama kali komponen dimuat
    fetchInitialData();

    // Simpan referensi fungsi fetchWishlistFromFirestore untuk pembaruan selanjutnya
    setFetchWishlist(() => fetchInitialData);

    // Membersihkan fungsi fetchWishlistFromFirestore saat komponen dibongkar
    return () => setFetchWishlist(null);
  }, []);

  // Menghandle penghapusan item dari wishlist
  const handleRemoveFromWishlist = async (id) => {
    if (!id) {
      console.warn('Document ID is empty or undefined');
      return; // Batalkan operasi jika id tidak valid
    }
    const fireStoreCollection = collection(db, 'tugas3api');
    try {
      await deleteDoc(doc(fireStoreCollection, id));
      const updatedWishlist = wishlist.filter((item) => item.id !== id);
      setWishlist(updatedWishlist);
//      navigation.navigate('Home');  menghapus item
    } catch (error) {
      console.warn('Error removing document: ', error);
    }
  };

  // Memuat ulang data
  useEffect(() => {
    if (fetchWishlist) {
      fetchWishlist();
    }
  }, [wishlist, fetchWishlist]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.title}</Card.Title>
            {item.poster && (
              <Card.Image source={{ uri: item.poster }} />
            )}
            <Text style={styles.year}>{item.year}</Text>
            <Button
              title="Remove"
              onPress={() => handleRemoveFromWishlist(item.id)}
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
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
