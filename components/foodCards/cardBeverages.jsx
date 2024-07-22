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
  StatusBar,
} from "react-native";
// import { groupedChicken } from "./groupedChicken";
// import { groupedBeverages } from "./groupedBeverages";

const CardBeverages = ({ groupedBeverages }) => {
  const [selectedCategory, setSelectedCategory] = useState("Beverages");
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
      <View style={styles.tabContainer}></View>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setNumColumns(numColumns === 1 ? 2 : 1)}
      >
        <Text style={styles.toggleButtonText}>
          {numColumns === 1 ? "" : ""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"blue"}
          >
            <path
              d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <FlatList
          data={groupedBeverages[selectedCategory]}
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
    flexBasis: "49%",
    margin: "0.5%",
    paddingTop: StatusBar.currentHeight,
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
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
  },
  selectedTabText: {
    fontWeight: "bold",
    color: "red",
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
  toggleButton: {
    backgroundColor: "",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight:10,
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default CardBeverages;
