import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';


const Carousel = () => {
  const images = [
    'https://offercdn.paytm.com/blog/2019/11/zomato-4pe400-app-bnr.jpg',
    'https://img.paisawapas.com/ovz3vew9pw/2022/07/04192608/lucios-deal-pw.jpg',
    'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg'
  ];
  return (
    <View style={styles.container}>
      <SliderBox images={images} autoPlay circleLoop dotColor='#13274F' inactiveDotColor='#90A4AE' ImageComponentStyle={{borderRadius: 8, width: '94%', marginTop: 10}}/>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})