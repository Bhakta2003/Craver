import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image ,StatusBar,TextInput} from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';
import DeliveryTrackingScreen from './DeliveryTrackingScreen';

const PaymentMethodSelection = ({navigation}) => {
  const [selectedMethod, setSelectedMethod] = React.useState(null);

  const methods = [
    {
      id: 1,
      title: 'Amazon Pay UPI',
      bank: 'State Bank of India **9078',
      icon: require('../assets/sbi.png'),
      balanceCheck: true,
    },
    {
      id: 2,
      title: 'Amazon Pay UPI',
      bank: 'Federal Bank **1122',
      icon: require('../assets/federal.png'),
      balanceCheck: true,
    },
    {
      id: 3,
      title: 'Other UPI Apps',
      description: 'Google Pay, PhonePe, Paytm and more',
      icon: require('../assets/phonepe.png'),
    },
    {
      id: 4,
      title: 'Credit or debit card',
      icon:require('../assets/creditcard.png'),
    },
    {
      id: 5,
      title: 'EMI',
      icon: require('../assets/emi.png'),
      unavailable: true,
    },
    {
      id: 6,
      title: 'Net Banking',
      icon: require('../assets/netbanking.png'),
    },
    {
      id: 7,
      title: 'Cash on Delivery/Pay on Delivery',
      description: 'Cash, UPI and Cards accepted.',
      icon:require('../assets/cod.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Select a payment method</Text>

      {methods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={styles.methodContainer}
          onPress={() => setSelectedMethod(method.id)}
          disabled={method.unavailable}
        >
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={selectedMethod === method.id}
            onPress={() => setSelectedMethod(method.id)}
            containerStyle={{ margin: 0, padding: 0 }}
          />
          <Image source={method.icon} style={styles.icon} />
          <View style={styles.methodDetails}>
            <Text style={styles.methodTitle}>{method.title}</Text>
            {method.bank && <Text style={styles.methodBank}>{method.bank}</Text>}
            {method.description && <Text style={styles.methodDescription}>{method.description}</Text>}
            {method.unavailable && (
              <Text style={styles.unavailableText}>Unavailable for this payment</Text>
            )}
          </View>
          {method.balanceCheck && <Text style={styles.checkBalance}>Check balance</Text>}
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.addGiftCardButton}>
        <TextInput placeholder='Enter 16 digit code' style={styles.giftCardInput}></TextInput>
        <Text style={styles.addGiftCardText}>Add Gift Card or Promo Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={()=>{navigation.navigate(DeliveryTrackingScreen)}}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop:StatusBar.currentHeight,
    
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginVertical:10,
    color: 'black',
  },
  methodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 16,
    borderRadius:6,
  },
  methodDetails: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  methodBank: {
    fontSize: 14,
    color: '#555',
  },
  methodDescription: {
    fontSize: 14,
    color: '#555',
  },
  unavailableText: {
    fontSize: 14,
    color: 'red',
  },
  checkBalance: {
    color: '#007bff',
  },
  addGiftCardButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  addGiftCardText: {
    color: '#007bff',
  },
  giftCardInput:{
    borderWidth:1,
    width:'100%',
    height:40,
    borderRadius:5,
    borderColor:'#ddd',
    marginBottom:5,
    paddingHorizontal:15,
  },
  continueButton: {
    backgroundColor: '#ff9900',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:150,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentMethodSelection;
