import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { Card } from '@rneui/base';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist, setWishlist } from '../../redux/action';
import { db } from '../config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';

const WishlistHandle = () => {
    const [loading, setLoading] = useState(true);
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const [fetchWishlist, setFetchWishlist] = useState(null);



    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const fireStoreCollection = collection(db, 'ListMovie');
                const querySnapshot = await getDocs(fireStoreCollection);
                const fetchedWishlist = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                // dispatch(setWishlist(fetchedWishlist));
                dispatch({ type: 'SET_WISHLIST', payload: fetchedWishlist });
                setLoading(false);
            } catch (error) {
                console.warn('Error fetching wishlist: ', error);
                setLoading(false);
            }
        };

        fetchInitialData();

        const interval = setInterval(fetchInitialData, 1000);

        return () => clearInterval(interval);

    }, []);


    const handleRemoveFromWishlist = async (item) => {
        if (!item.id) {
            console.warn('Document ID is empty or undefined');
            return;
        }
        try {
            await deleteDoc(doc(collection(db, 'ListMovie'), item.id));
            // Update Redux state by dispatching an action to remove item from wishlist
            dispatch(removeFromWishlist(item)); // Dispatch removeFromWishlist action to update Redux state
        } catch (error) {
            console.warn('Error removing document: ', error);
        }
    };

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
                        {item.poster && <Card.Image source={{ uri: item.poster }} />}
                        <Text style={styles.year}>{item.year}</Text>
                        <Button title="Remove" onPress={() => handleRemoveFromWishlist(item)} />
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

export default WishlistHandle;

