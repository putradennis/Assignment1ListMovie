import { Image } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const Movie = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?s=batman&apikey=1cde1038')
            .then((response) => response.json())
            .then((json) => {
                setData(json.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image style={styles.poster} source={{ uri: item.Poster }} />
                    <Text style={styles.title}>{item.Title}</Text>
                    <Text>Year : {item.Year}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    poster: {
        width: '100%',
        height: 350,
        marginRight: 10,
    },
});

export default Movie;