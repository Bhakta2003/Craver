import { View, StyleSheet, FlatList, Text, Image, Button, SafeAreaView, ScrollView, StatusBar } from "react-native";
import Cartcard from "./Cartcard";
import { useState } from "react";
import PriceCard from "./PriceCard";
import { getCart } from "../CartOperations";
import ConfirmOrder from "./ConfirmOrder";

//function to calculate total price;
function CartPage({ navigation, route }) {
    const [items, setItems] = useState(getCart());
    
    function calculateTotalPrice() {
        let tprice = 0;
        items.map((item) => {
            tprice = tprice + (item.quantity * item.price);
        });
        return tprice;
    }

    let totalprice = calculateTotalPrice();
    
    function updateCartState() {
        const x = getCart();
        setItems([...x]);
        totalprice = calculateTotalPrice();
        console.log("Called");
    }

    return (
        <View>
            <ScrollView contentContainerStyle={styles.cardContainer}>
                <SafeAreaView style={styles.headContainer}>
                    <Text style={styles.heading}>Items</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.productsContainer}>
                    <FlatList contentContainerStyle={styles.list} data={items} renderItem={({ item }) => (
                        <Cartcard onChange={updateCartState} image={item.image} price={item.price} title={item.title} about={item.about} quantity={item.quantity}></Cartcard>
                    )}></FlatList>
                    {(items.length == 0) ? <Text style={{ marginLeft: 25, fontWeight: "300" }}>No Data Found</Text> : <></>}
                </SafeAreaView>
                <SafeAreaView style={styles.headContainer}>
                    <Text style={styles.priceHeading}>Price Details</Text>
                </SafeAreaView>
                {(items.length != 0) ? <SafeAreaView style={styles.pricesHeading}>
                    <Text style={styles.pricesHeadingText}>Items</Text>
                    <Text style={styles.pricesHeadingText}>Quantity</Text>
                    <Text style={styles.pricesHeadingText}>Prices</Text>
                </SafeAreaView> : <Text style={{ marginLeft: 25, fontWeight: "300" }}>No Data Found</Text>}
                <SafeAreaView style={styles.productsContainer}>
                    <FlatList data={items} renderItem={({ item }) => (<PriceCard title={item.title} quantity={item.quantity} price={item.price}></PriceCard>)}></FlatList>
                </SafeAreaView>
                <View style={styles.line}></View>
                <SafeAreaView style={styles.bottom}>
                    <Text style={styles.pricesHeadingText}>Grand Total:<Image style={{ width: 14, height: 14 }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/25/25473.png" }}></Image>{totalprice}</Text>
                </SafeAreaView>
            </ScrollView>
            <View style={styles.bottomFixed}>
                <View>
                    <Text style={styles.small}>Grand Total</Text>
                    <Text style={styles.medium}><Image style={{ width: 20, height: 20, }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/25/25473.png" }}></Image>{totalprice}</Text>
                </View>
                <View>
                    {(items.length == 0) ? <Button disabled title="Place Order" ></Button> :
                        <Button title="Place Order" onPress={() => { navigation.navigate("ConfirmOrder") }} color={"orange"} ></Button>}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingTop: StatusBar.currentHeight,
        width: "100%",
        minHeight: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    card: {
        elevation: 2,
    },
    bottomFixed: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        width: "95%",
        height: 70,
        padding: 15,
        backgroundColor: "#009966",
        bottom: 85,
        marginHorizontal:9,
        borderRadius:15,
    },
    small: {
        fontSize: 12,
        fontWeight: "100",
        color: "white",
    },
    medium: {
        fontSize: 20,
        fontWeight: "200",
        color: "white",
    },
    productsContainer: {
        minHeight: "auto",
        width: "100%",
        flexDirection: "column",
        
    },
    headContainer: {
        width: "100%",
        height: 55,
        justifyContent: "center",
        padding: 10,
    },
    heading: {
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: "bold"
    },
    priceHeading: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    list: {
        gap: 5,
        alignItems: "center",
        elevation: 21,
        shadowOffset: 4,
        shadowColor: "red"
    },
    pricesHeading: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        padding: 4,
    },
    pricesHeadingText: {
        fontSize: 15,
        fontWeight: "600",
        // marginBottom:20,
    },
    bottom: {
        width: "100%",
        height: 120,
        alignItems: "flex-end",
        padding: 10,
        marginRight: 30,
        marginBottom:150,
    },
    line: {
        backgroundColor: "black",
        height: 1,
        width: "100%",
        margin: 6,
    },
});

export default CartPage;
