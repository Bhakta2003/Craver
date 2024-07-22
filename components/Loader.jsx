import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <LottieView
        source={require('../assets/Pan2.json')} // Ensure this path is correct
        autoPlay
        loop
        style={styles.animation}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: width * 0.5, // Adjust the size as needed
    height: height * 0.5,
    backfaceVisibility: 'visible',
  },
});

export default Loader;
