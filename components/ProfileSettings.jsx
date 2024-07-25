import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import Home from './Home';


const Stack = createStackNavigator();

const ProfileSettings = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerTitleStyle: {
            fontSize: 24,
            color: 'white'
          },
          headerStyle: {
            backgroundColor: '#009966',
          }
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: 'Edit Profile',
          headerTitleStyle: {
            fontSize: 24,
            color: 'white'
          },
          headerStyle: {
            backgroundColor: '#009966',
          }
        }}
      />

    </Stack.Navigator>
  );
};

export default ProfileSettings;
