import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import CardBeverages from './foodCards/CardBeverages';
import CardView from './CardView';

const { width } = Dimensions.get('window');
const data = [
    {
        id: '1',
        name: 'Pizza',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKGYbl4k6RC0JCx1R1ZeTxQVPgVahTu5M3w&s'
    },
    {
        id: '2',
        name: 'Burger',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sT5zC4y0-6mPucxnXLg4ATqCxjVN7bAttQ&s'
    },
    {
        id: '3',
        name: 'Biriyani',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa19BYG9TkOUrensR7jydNsFShjF1fOpIpUA&s'
    },
    {
        id: '4',
        name: 'Beverages',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTQsZY38zrxbjkIk-TD-xdFq6zeAfPYEJmg&s'
    },
    {
        id: '5',
        name: 'Desserts',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrOj2_N3nNClGtzNjVT9QUCxF3NnetlLw-g&s'
    },
    {
        id: '6',
        name: 'Paneer',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2vs7GwXOwIHQ6iGpsu2lTG9eEy5VSaXTRg&s'
    },
    {
        id: '7',
        name: 'Chicken',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGg8Qi99FDqVD6FuQTP2kHNC7bgKJ0b5VScA&s'
    },
];
const DishesCategory = ({ navigation }) => {
    const categoryarray = ["Card", "CardBurger", "CardBiryani", "CardBeverages", "CardDesserts", "CardPaneer", "CardChicken"];
    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate(categoryarray[parseInt(item.id) - 1])}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.url }} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </Pressable>
    );
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
        />
    );
}

export default DishesCategory

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    itemContainer: {
        alignItems: 'center',
        marginVertical: 0,
        paddingHorizontal: 10,
        marginHorizontal: 8,
        width: 90,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'grey',
        paddingBottom: 10,
        paddingTop: 10,

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
        fontWeight: '500',
    },
})