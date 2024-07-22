import {View,Text, StyleSheet,Image} from "react-native";

function PriceCard(props)
{
    return(
        <View style={styles.priceContainer}>
            <View style={{width:"30%",alignItems:"center"}}><Text style={styles.priceText}>{props.title}</Text></View>
            <View style={{width:"30%",alignItems:"center"}}><Text style={styles.priceText}>{props.quantity}</Text></View>
            <View style={{width:"30%",alignItems:"center"}}><Text style={styles.priceText}><Image style={{width:10,height:10}} source={{uri:"https://cdn-icons-png.flaticon.com/128/25/25473.png"}}></Image>{props.price*props.quantity}</Text></View>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        priceContainer:{
            flexDirection:"row",
            width:"100%",
            padding:4,
            justifyContent:"space-evenly"
        },
        priceText:{
            fontSize:12,
            fontWeight:"600",
        }
    }
)
export default PriceCard;