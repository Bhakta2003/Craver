import { getCart, setCartEmpty } from "../CartOperations"
import { View, Text, ScrollView, FlatList, StyleSheet, TextInput, Image, Button ,StatusBar} from "react-native"
import ConfirmOrderCard from "./ConfirmOrderCard";
import { profile } from "../Profile";
import PriceCard from "./PriceCard";
import { useState } from "react";
import PaymentMethodSelection from "./PaymentMethodSelection";


function ConfirmOrder({ navigation, route }) {
    let items = getCart();
    console.log(items);
    function calculateTotalPrice() {
        tprice = 0;
        items.map((item) => {
            tprice = tprice + (item.quantity * item.price);
        })
        return tprice;
    }
    const [display, setDisplay] = useState("none");
    let totalprice = calculateTotalPrice();
    return (
        <View>
            <ScrollView>
                <View style={styles.headingContainer}><Text style={styles.heading}>Ordered Items</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList contentContainerStyle={styles.list} data={items} renderItem={({ item }) => (<ConfirmOrderCard image={item.image} title={item.title} about={item.about} price={item.price} quantity={item.quantity}></ConfirmOrderCard>)}></FlatList>
                </View>
                <View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Bill Details</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        {(items.length != 0) ? <View style={styles.pricesHeading}>
                            <Text style={styles.pricesHeadingText}>Items</Text>
                            <Text style={styles.pricesHeadingText}>Quantity</Text>
                            <Text style={styles.pricesHeadingText}>Prices</Text>
                        </View> : <Text style={{ marginLeft: 25, fontWeight: "300" }}>No Data Found</Text>}
                        <View style={styles.productsContainer}>
                            <FlatList data={items} renderItem={({ item }) => (<PriceCard title={item.title} quantity={item.quantity} price={item.price}></PriceCard>)}></FlatList>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.bottom}>
                            <Text style={styles.pricesHeadingText}>Grand Total:<Image style={{ width: 14, height: 14 }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/25/25473.png" }}></Image>{totalprice}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.headingContainer}><Image width={20} height={20} source={{ uri: "https://cdn-icons-png.flaticon.com/128/3177/3177361.png" }}></Image><Text style={styles.heading}>Deliver to:</Text></View>
                    <TextInput style={styles.input} placeholder="Name" >{profile.name}</TextInput>
                    <TextInput style={styles.input} placeholder="Address">{profile.address}</TextInput>
                    <TextInput style={styles.input} placeholder="Phone" >{"+91 " + profile.phone}</TextInput>
                </View>
                <View style={styles.button}>
                    <Button title="Confirm Order" onPress={() => { navigation.navigate(PaymentMethodSelection) }} color={"orange"}  ></Button>
                </View>
                {/* <View style={[styles.sucessMessage, { display: display }]}>
                    <View style={styles.box}>
                        <Image width={90} height={90} source={{ uri: "https://cdn2.iconfinder.com/data/icons/user-interface-vol-2-21/64/Thank_You-1024.png" }}></Image>
                        <Text style={styles.orderPlaced}>Your Order is Placed</Text>
                        <Image width={120} height={120} source={{ uri: "https://static.vecteezy.com/system/resources/previews/008/506/390/large_2x/bright-green-tick-checkmark-icon-free-png.png" }}></Image>
                        <View style={styles.button}><Button title="OK" onPress={() => {
                            setDisplay("none");
                            setCartEmpty();
                            navigation.navigate("Home")
                        }} color={"#192A56"}></Button></View>
                    </View>
                </View> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        height: 90,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        paddingBottom: 2,
        paddingTop: StatusBar.currentHeight,
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 12,
    },
    orderPlaced: {
        fontSize: 20,
        fontWeight: "700",
    },
    listContainer: {
        width: "100%",
        height: "auto",
        padding: 5
    },
    list: {
        width: "100%",
        gap: 7,
        alignItems: "center"
    },
    input: {
        width: "95%",
        minHeight: 40,
        borderCurve: "circular",
        borderColor: "#7B8788",
        borderWidth: 1,
        borderRadius: 5,
        padding: 9,
        elevation: 0,
    },
    infoContainer: {
        gap: 5,
        alignItems: "center"
    },
    button: {
        width: "100%",
        padding: 10,
        marginTop: 10,
        paddingBottom:100,

    },
    productsContainer: {
        minHeight: "auto",
        width: "100%",
        flexDirection: "column",

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
    },
    bottom: {
        width: "100%",
        height: "auto",
        alignItems: "flex-end",
        paddingRight: 20,
        paddingTop: 10,
    },
    line: {
        backgroundColor: "black",
        height: 1,
        width: "100%",
        margin: 4
    },
    sucessMessage: {
        position: "absolute",
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        opacity: 0.8,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        position: "absolute",
        height: "auto",
        width: "60%",
        opacity: 1,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 9,
        gap: 5
    }
})

export default ConfirmOrder;