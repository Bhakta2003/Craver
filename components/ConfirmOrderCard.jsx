import { View, Text, Image, StyleSheet } from "react-native";


function ConfirmOrderCard(props) {
    console.log(props);
    return (
        <View style={styles.container}>
            <View style={styles.content1}>
                <Image style={styles.cardImage} source={props.image}></Image>
            </View>
            <View style={styles.content2}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={{color:'#1686fa',}}>{props.about}</Text>
            </View>
            <View style={styles.content3}>
                <Text>Price:<Image style={{ width: 12, height: 12 }} source={{ uri: "https://cdn-icons-png.flaticon.com/128/25/25473.png" }}></Image>{props.price}</Text>
                <Text>Quantity:{props.quantity}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            width: "96%",
            height: 80,
            borderColor: "#7B8788",
            borderWidth: 2,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            elevation: 0,
            
        },
        content1: {
            flex: 0.9,
            height: 84,
            padding: 7,
        },
        cardImage: {
            borderRadius: 35,
            height: 70,
            width: 70,
        },
        content2: {
            flex: 2,
            flexDirection: "column",
            gap: 3,
        },
        content3: {
            flex: 1.2,
            flexDirection: "column",
            gap: 3,
        },
        title: {
            fontWeight: "700",
            fontSize: 17,
        }
    }
);

export default ConfirmOrderCard;