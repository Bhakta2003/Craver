import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar
} from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const headerOpacity = useRef(new Animated.Value(0)).current;
  const inputOpacity = useRef(new Animated.Value(0)).current;
  const signUpOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(inputOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(signUpOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <LottieView
          source={require('../assets/delivery1.json')} 
          autoPlay
          loop
          style={styles.animation}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomSection}>
        <Animated.View style={{ opacity: headerOpacity }}>
          <Text style={styles.header}>Login</Text>
        </Animated.View>
        <Animated.View style={{ opacity: inputOpacity }}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={'white'}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={'white'}
            secureTextEntry
          />
          <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.signInButtonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.signUpContainer, { opacity: signUpOpacity }]}>
          <Text style={{color:'orange'}}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop:StatusBar.currentHeight,
  },
  topSection: {
    height: height * 0.3,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bottomSection: {
    flex: 1,
    padding: 20,
    backgroundColor: '#009966', 
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color:'white',
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    paddingLeft: 40,
  },
  signInButton: {
    backgroundColor: '#FE9600',
    borderRadius: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: 'white',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
  animation: {
    width: width * 0.9, 
    height: height * 0.4,
  },
});

export default LoginScreen;
