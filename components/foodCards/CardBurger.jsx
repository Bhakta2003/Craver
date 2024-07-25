import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar
} from "react-native";
import { groupedBurger } from "../../foodData/groupedBurger";
import { addToCart } from "../../CartOperations";

const CardBurger = () => {
  const [selectedCategory, setSelectedCategory] = useState("Burgers");
  const [numColumns, setNumColumns] = useState(1);

  const renderItem = ({ item }) => {
    const { bgImage, title, description, price, size } = item;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Image source={bgImage} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.size}>{size}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => { addToCart({ image: bgImage, title: title, about: size, price: parseInt(price.slice(1, price.length)), quantity: 1 }) }}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.appName}>CRAVER</Text>
      <View style={styles.tabContainer}>
      </View>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setNumColumns(numColumns === 1 ? 2 : 1)}
      >
        <Text style={styles.toggleButtonText}>
          {numColumns === 1 ? "Show Two per Row" : "Show One per Row"}
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <FlatList
          data={groupedBurger[selectedCategory]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
          numColumns={numColumns}
          key={numColumns}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    flexBasis: '49%',
    margin: '0.5%',
    paddingTop: StatusBar.currentHeight,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
    color: "green",
    marginTop:30,
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#ddd",

  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
  },
  selectedTabText: {
    fontWeight: 'bold',
    color: 'red',
  },
  image: {
    width: "100%",
    height: 200,
  },
  popular: {
    backgroundColor: "#00cc44",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  bestseller: {
    backgroundColor: "#ff4444",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  details: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  size: {
    fontSize: 14,
    color: '#187bcd',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: "#009966",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  toggleButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default CardBurger;
