// src/App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MovieListScreen from './screen/Camera';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MovieListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;