import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ImageBackground, Pressable, Dimensions ,StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Welcome = () => {
  const navigation = useNavigation();
  const textOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Delay before starting text animation
    setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        // Delay before starting button animation
        setTimeout(() => {
          Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            // Looping button scale animation
            Animated.loop(
              Animated.sequence([
                Animated.timing(buttonScale, {
                  toValue: 1.1,
                  duration: 500,
                  useNativeDriver: true,
                }),
                Animated.timing(buttonScale, {
                  toValue: 1,
                  duration: 500,
                  useNativeDriver: true,
                }),
              ])
            ).start();
          });
        }, 500); // Adjust the delay as needed
      });
    }, 1500); // Adjust the delay for the text to appear after the animation starts
  }, []);

  const handlePress = () => {
    // Stop the looping animation
    buttonScale.stopAnimation(() => {
      // Animate button on press
      Animated.sequence([
        Animated.timing(buttonScale, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(buttonScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => {
        navigation.navigate('Login');
      });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <LottieView
          source={require('../assets/food.json')} // Ensure this path is correct
          autoPlay
          loop
          style={styles.animation}
          resizeMode="contain"
        />
      </View>
      <ImageBackground
        source={require('../assets/layout2.png')} // Ensure this path is correct
        style={styles.bottomSection}
        imageStyle={styles.background}
      >
        <View style={styles.overlay}>
          <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
            <Text style={styles.title}>HUNGRY?</Text>
            <Text style={styles.subtitle}>GET CRAVER.</Text>
          </Animated.View>
          <Animated.View style={[styles.buttonContainer, { opacity: buttonOpacity, transform: [{ scale: buttonScale }] }]}>
            <Pressable onPress={handlePress}>
              <View style={styles.roundButton}>
                <Text style={styles.buttonText}>Get Started</Text>
              </View>
            </Pressable>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop:StatusBar.currentHeight,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20, // Adjust the padding to move elements down
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adjust spacing as needed
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fe9600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    color: '#fe9600',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  roundButton: {
    backgroundColor: '#009966',
    width: 175,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  topSection: {
    height: height * 0.4,
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  animation: {
    width: width * 0.8, 
    height: height * 0.4, 
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});

export default Welcome;
