import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login';
import GetStarted from './components/GetStarted';
import Signup from './components/Signup';
import Menu from './components/Menu';
import CartPage from './components/CartPage';
import Feather from 'react-native-vector-icons/Feather';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
// import ConfirmOrder from './components/ConfirmOrder';
import StackNavigator from './components/StackNavigator';
import ProfileSettings from './components/ProfileSettings';
// import CardView from './components/CardView';
import Card from './components/foodCards/Card';
import CardBurger from './components/foodCards/CardBurger';
import CardBeverages from './components/foodCards/CardBeverages';
import CardPaneer from './components/foodCards/CardPaneer';
import CardDesserts from './components/foodCards/CardDesserts';
import CardChicken from './components/foodCards/CardChicken';
import CardBiryani from './components/foodCards/CardBiryani';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: 'white',
      }
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Feather name='home' size={24} color={focused ? 'black' : 'grey'} />
                <Text style={{ fontSize: 12, color: 'black' }}>Home</Text>
              </View>
            )

          }

        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Feather name='menu' size={24} color={focused ? 'black' : 'grey'} />
                <Text style={{ fontSize: 12, color: 'black' }}>Menu</Text>
              </View>
            )

          }
        }}
      />
      <Tab.Screen
        name="Cart"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Feather name='shopping-cart' size={24} color={focused ? 'black' : 'grey'} />
                <Text style={{ fontSize: 12, color: 'black' }}>Cart</Text>
              </View>
            )
          }
        }} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed (3 seconds in this example)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Show the loader
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Profile" component={ProfileSettings} />
        <Stack.Screen name="Card" component={Card} options={{ headerShown: true, }} />
        <Stack.Screen name="CardBurger" component={CardBurger} options={{ headerShown: true, }} />
        <Stack.Screen name="CardBiryani" component={CardBiryani} options={{ headerShown: true, }} />
        <Stack.Screen name="CardBeverages" component={CardBeverages} options={{ headerShown: true, }} />
        <Stack.Screen name="CardChicken" component={CardChicken} options={{ headerShown: true, }} />
        <Stack.Screen name="CardDesserts" component={CardDesserts} options={{ headerShown: true, }} />
        <Stack.Screen name="CardPaneer" component={CardPaneer} options={{ headerShown: true, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });