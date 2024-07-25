import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TopCategory = () => {
    const items = [
        { id: '1', name: 'Fastest Delivery', icon: 'rocket' },
        { id: '2', name: 'Rating 4.0+', icon: 'star' },
        { id: '3', name: 'Offers', icon: 'tags' },
        { id: '4', name: 'Cuisines', icon: 'cutlery' },
        { id: '5', name: 'Halal', icon: 'leaf' },
        { id: '6', name: 'Pro', icon: 'certificate' },
    ];

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} style={styles.smallCategory}>
                        <View style={styles.smallCategoryText}>
                            <FontAwesome name={item.icon} size={16} color="white" style={styles.icon} />
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default TopCategory;

const styles = StyleSheet.create({
    smallCategory: {
        marginTop: 0,
        marginLeft: 5,
    },
    smallCategoryText: {
        marginHorizontal: 4,
        marginVertical: 0,
        padding: 5,
        backgroundColor: '#0078ae',
        borderRadius: 25,
        width: 110,
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
    },
    icon: {
        marginRight: 5,
        marginLeft:10,
    },
    text: {
        paddingHorizontal: 5,
        color: 'white',
        fontWeight: 'bold',
    },
});
