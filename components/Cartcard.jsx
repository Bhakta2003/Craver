import { useState } from "react";
import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import { updateCart,removeCart } from "../CartOperations";

function Cartcard({ onChange, title, about, image, quantity, price }) {
    const [Quantity, setQuantity] = useState(quantity);

    async function increaseQuantity() {
        const value = (prev) => (prev + 1);
        setQuantity(value);
        updateCart(title, Quantity + 1);
        await onChange();
    }
    async function decreaseQuantity() {
        const value = (prev) => ((prev > 1) ? prev - 1 : prev);
        setQuantity(value);
        updateCart(title, Math.max(1, (Quantity - 1)));
        await onChange();
    }
    function removeItemFromCart(){
        removeCart(title);
        onChange();
    }
    return (
        <View style={styles.container}>
            <View style={styles.content1}>
                <Image style={styles.cardImage} source={image}></Image>
            </View>
            <View style={styles.content2}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{about}</Text>
                <Text style={styles.price}><Image style={{ width: 12, height: 12 }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/25/25473.png" }}></Image>{price}</Text>
            </View>
            <View style={styles.content3}>
                <View>
                    <Pressable onPress={() => { increaseQuantity() }}><Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/9312/9312231.png" }} style={styles.icon}></Image></Pressable>
                    <Text style={styles.icon}>{Quantity}</Text>
                    <Pressable onPress={() => { decreaseQuantity() }}><Image style={styles.icon} source={{ uri: "https://cdn-icons-png.flaticon.com/128/9146/9146915.png" }}></Image></Pressable>
                </View>
            </View>
            <View style={styles.content4}>
                <Pressable onPress={removeItemFromCart}>
                    <Image style={styles.remove} source={{ uri: "https://cdn-icons-png.flaticon.com/128/484/484662.png" }}></Image>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "96%",
        minHeight: 100,
        borderColor: "#7B8788",
        borderWidth: 1,
        borderRadius: 9,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        elevation:0,
        margin:3,
        backgroundColor:'white',
    },
    content1: {
        flex: 1,
        height: 100,
        padding: 10,
    },
    cardImage: {
        borderRadius: 35,
        height: 70,
        width: 70,
    },
    content2: {
        flex: 3,

        flexDirection: "column",
        gap: 3,
    },
    content3: {
        flex: 0.5,
    },
    content4: {
        flex: 0.5,

    },
    icon: {
        height: 25,
        width: 25,
        borderColor: "#7B8788",
        borderWidth: 2,
        borderRadius: 12.5,
        padding: 2,
        fontWeight: "200",
        textAlign: "center",
        fontSize: 16,
        margin: 3,
        
    },
    title: {
        fontSize: 20,
        fontWeight: "600"
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "200",
        color:'#1686fa',
    },
    remove: {
        width: 22,
        height: 22,

    },
    price:{
        color:'black',
        fontWeight:'bold',
    },
});

export default Cartcard;