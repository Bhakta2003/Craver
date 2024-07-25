import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
import ImgSlid from './ImgSlid';
import TopCategory from './TopCategory';
import DishesCategory from './DishesCategory';
import BestSellerCards from './BestSellerCards';
import { BestSellerInfo } from './BestSellerInfo';
// import ProfileSettings from './ProfileSettings';
// import ProfileScreen from './ProfileScreen';



const Home = ({ navigation }) => {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Octicons name='location' size={24} color='#009966' />
                <View style={styles.headerText}>
                    <Text style={styles.deliverTo}>Deliver To</Text>
                    <Text style={styles.Address}>Silicon University, Bbsr</Text>
                </View>
                <Pressable style={styles.profile} onPress={() => navigation.navigate('Profile')}>
                    <Text>B</Text>
                </Pressable>
            </View>
            <View style={styles.searchContainer}>
                <TextInput placeholder='Search for Food' />
                <Octicons name='search' size={24} color="#25d366" />
            </View>
            <ImgSlid />
            <TopCategory />
            <View style={{flexDirection: 'column',alignItems: 'center',justifyContent: 'center',flex: 1,}}>
                <View style={{height: 0.3,backgroundColor: 'gray',width: '80%',marginVertical: 10,}}></View>
                <Text style={{ marginVertical:1, letterSpacing: 6, color: 'gray' }}>EXPLORE</Text>
                <View style={{height: 0.5,backgroundColor: 'gray',width: '80%',marginVertical: 10,}}></View>
            </View>
            <DishesCategory navigation={navigation} />
            <Text style={{ textAlign: 'center', marginTop: 7, letterSpacing: 6, marginBottom: 13, color: 'gray' }}>OUR BESTSELLERS</Text>
            {BestSellerInfo.map(item => (
                <BestSellerCards key={item.id} item={item} />
            ))}
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f7',
        width: '100%',
        paddingTop: StatusBar.currentHeight,
    },
    profile: {
        backgroundColor: '#6CB4EE',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13,
        padding: 10,
    },
    headerText: {
        flex: 1,
    },
    deliverTo: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    Address: {
        color: 'gray',
        fontSize: 16,
        marginTop: 2,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 11,
    },
})