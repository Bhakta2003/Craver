import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Card from './foodCards/Card';
import StackNavigator from './StackNavigator';
// import CardBeverages from './foodCards/cardBeverages';
// import {groupedBeverages} from './foodData/groupedBeverages';
// import {groupedBiryanis} from './foodData/groupedBiryanis';
// import {groupedBurger} from './foodData/groupedBurger';
// import {groupedChicken} from './foodData/groupedChicken';
// import {groupedDesserts} from './foodData/groupedDesserts';
// import {groupedPaneer} from './foodData/groupedPaneer';
// import {groupedPizzas} from './foodData/groupedPizzas';
// import Card from './components/foodCards/Card';
import cardBeverages from './foodCards/CardBeverages';
// import CardBiryani from './components/foodCards/CardBiryani';
// import cardBurger from './components/foodCards/cardBurger';
// import cardChicken from './components/foodCards/cardChicken';
// import cardDesserts from './components/foodCards/cardDesserts';
//import cardPaneer from './components/foodCards/cardPaneer';

const Stack = createStackNavigator();


const CardView = () => {
  return (
    <StackNavigator initialRouteName="groupedBeverages">
        <Stack.Screen
        name='groupedBeverages'
        component={cardBeverages}
        options={{
            title:'groupedBeverages',
        }}
        />
    </StackNavigator>
  )
}

export default CardView

const styles = StyleSheet.create({})