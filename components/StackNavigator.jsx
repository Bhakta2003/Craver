import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartPage from './CartPage';
import ConfirmOrder from './ConfirmOrder';

const Stack = createStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="CartPage" component={CartPage} />
            <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})