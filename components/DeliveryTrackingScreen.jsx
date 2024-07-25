import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Pressable } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { setCartEmpty } from '../CartOperations';

const DeliveryTrackingScreen = ({navigation}) => {

  const routeCoordinates = [
    { latitude: 20.29957, longitude: 85.844549 },
    { latitude: 20.308775, longitude: 85.825963 }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.chatButton} onPress={async() => {
          setCartEmpty();
          await navigation.navigate("Home")
        }}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="tomato" />
        </Pressable>
      </View>
      <View style={{ backgroundColor: '#e6ffda', marginHorizontal: 15, marginVertical: 10, borderRadius: 15, }}>
        <Text style={styles.orderPlaced1}>Order Placed Successfully!!!</Text>
        <Text style={styles.orderPlaced2}>Your Food is on the way</Text>
        <View style={styles.estimateContainer}>
          <Text style={styles.estimateText}>Estimate Delivery Time</Text>
          <Text style={styles.timeText}>05:30PM</Text>
          <Fontisto name='stopwatch' size={24} color={'black'} />
        </View>
      </View>

      <View style={styles.riderContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_FShf9D5tIrj0-BPw4H4J8-OjN7867Pixg&s' }}
          style={styles.riderPhoto}
        />
        <View style={styles.riderInfo}>
          <Text style={styles.riderName}>Dinkar Kumar</Text>
          <Text style={styles.riderRating}>⭐ 4.3 (324 ratings)</Text>
        </View>
      </View>

      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 20.296059,
            longitude: 85.824539,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 20.29957, longitude: 85.844549 }}
            title="Your location"
            description="Home"
            pinColor="yellow"
          >
            <MaterialIcons name="location-pin" size={30} color="tomato" />
          </Marker>
          <Marker
            coordinate={{ latitude: 20.308775, longitude: 85.825963 }}
            title="Delivery vehicle"
            description="Delivery"
          >
            <MaterialIcons name="delivery-dining" size={30} color="black" />
          </Marker>
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000"
            strokeWidth={3}
          />
        </MapView>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 10,
  },
  orderPlaced1: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#25d366',
    marginTop: 15,
  },
  orderPlaced2: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#25d366',

  },
  chatButton: {
    marginLeft: 10,
  },
  estimateContainer: {
    alignItems: 'center',
    padding: 15,
    // backgroundColor: '#fff',
  },
  estimateText: {
    fontSize: 16,
    color: '#777',
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'tomato',
  },
  riderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e7e7e7',
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 15,
  },
  riderPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  riderInfo: {
    flex: 1,
  },
  riderName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  riderRating: {
    fontSize: 16,
    color: '#777',
  },
  mapWrapper: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
});

export default DeliveryTrackingScreen;
