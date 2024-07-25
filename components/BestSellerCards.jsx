import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { addToCart } from '../CartOperations';

const BestSellerCards = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={item.url} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.size}>{item.size}</Text>
                <TouchableOpacity style={styles.addButton} onPress={()=>{addToCart({image:item.url,title:item.title,about:item.size,price:parseInt(item.price.slice(1, item.price.length)),quantity:1})}}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BestSellerCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:0,
        marginBottom:20,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    info: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    description: {
        fontSize: 14,
        color: '#777',
        marginVertical: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 0,
    },
    size: {
        fontSize: 14,
        color: '#1686fa',
        marginVertical: 5,
        fontWeight:'bold',
    },
    addButton: {
        backgroundColor: '#009966',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
