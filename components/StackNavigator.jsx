import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartPage from './CartPage';
import ConfirmOrder from './ConfirmOrder';
import PaymentMethodSelection from './PaymentMethodSelection';
import DeliveryTrackingScreen from './DeliveryTrackingScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="CartPage" component={CartPage} />
            <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
            <Stack.Screen name="PaymentMethodSelection" component={PaymentMethodSelection} />
            <Stack.Screen name="DeliveryTrackingScreen" component={DeliveryTrackingScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})