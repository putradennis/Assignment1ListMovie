import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const camera = () => {
    const [imageUri, setImageUri] = useState(null);

    const openCamera =  () => {
        const options = {
            mediaType: 'photo',
            cameraType: 'back',
            videoQuality: 'high',
            durationLimit: 5
        };

        launchCamera(options, (response) => {
            if(response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error){
              console.log('ImagePicker Error: ', response.error);
            } else {
              const uri = response.assets[0].uri;
              setImageUri(uri);
            }
        });
    };

    return (
        <View style = {styles.container}>
        <Button title="Open Camera" onPress={openCamera} />
        {imageUri && (
            <Image
               source={{uri: imageUri}}
               style={styles.image}
            />
        )}
        </View>
    );
   };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default camera