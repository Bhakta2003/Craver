import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const images = [
    {
        id: '1',
        url: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg'
    },
    {
        id: '2',
        url: 'https://img.paisawapas.com/ovz3vew9pw/2022/07/04192608/lucios-deal-pw.jpg'
    },
    {
        id: '3',
        url: 'https://offercdn.paytm.com/blog/2019/11/zomato-4pe400-app-bnr.jpg'
    },
];

const ImgSlid = () => {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
        </View>
    );

    return (
        <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
        />
    );
};
const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,

    },
    imageContainer: {
        marginHorizontal: 10,
        marginVertical: 20,
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 20,
        resizeMode: 'stretch',
    },
});

export default ImgSlid;
