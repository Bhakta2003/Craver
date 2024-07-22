import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList
} from "react-native";

const Card = ({ groupedPizzas }) => {
  const [selectedCategory, setSelectedCategory] = useState("Veg Pizzas");

  const renderItem = ({ item }) => {
    const { bgImage, popular, bestseller, title, description, price, size } = item;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Image source={bgImage} style={styles.image} />
          <View style={styles.info}>
            {popular && <Text style={styles.popular}>{popular}</Text>}
            {bestseller && <Text style={styles.bestseller}>{bestseller}</Text>}
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.size}>{size}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart+</Text>
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
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedCategory("Veg Pizzas")}
        >
          <Text
            style={[
              styles.tabText,
              selectedCategory === "Veg Pizzas" && styles.selectedTabText
            ]}
          >
            Veg Pizza
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setSelectedCategory("Non-Veg Pizzas")}
        >
          <Text
            style={[
              styles.tabText,
              selectedCategory === "Non-Veg Pizzas" && styles.selectedTabText
            ]}
          >
            Non-Veg Pizza
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={groupedPizzas[selectedCategory]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
    color: "green",
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
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
  info: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: "#777",
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: "#ff4444",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default Card;