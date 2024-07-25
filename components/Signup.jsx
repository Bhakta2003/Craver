import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import ReusableTextInput from '../components/ReusableTextInput';
import ReusableButton from '../components/ReusableButton';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const headerOpacity = useRef(new Animated.Value(0)).current;
  const inputOpacity = useRef(new Animated.Value(0)).current;
  const signInOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(inputOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(signInOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // const handleRegister = () => {
  //   // Add your register logic here
  // };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <LottieView
          source={require('../assets/delivery2.json')} // Ensure this path is correct
          autoPlay
          loop
          style={styles.animation}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomSection}>
        <Animated.View style={{ opacity: headerOpacity }}>
          <Text style={styles.header}>Sign Up</Text>
        </Animated.View>
        <Animated.View style={{ opacity: inputOpacity }}>
          <ReusableTextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={'white'}
            style={styles.input}
          />
          <ReusableTextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Create Password"
            placeholderTextColor={'white'}
            style={styles.input}
            secureTextEntry
          />
          <ReusableTextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={'white'}
            style={styles.input}
            secureTextEntry
          />
          <ReusableButton title="Sign Up" onPress={() => navigation.navigate('Home')} style={styles.button} />
        </Animated.View>
        <Animated.View style={[styles.signInContainer, { opacity: signInOpacity }]}>
          <Text style={{color:'orange',}}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInText}>Login</Text>
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
    borderRadius: 30,
    padding: 12,
    marginBottom: 15,
    paddingLeft: 40,
  },
  button: {
    backgroundColor: '#FE9600',
    borderRadius: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    fontWeight: 'bold'
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    color: 'white',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
  animation: {
    width: width * 0.9, // Adjust the size as needed
    height: height * 0.5,
  },
});

export default Signup;
