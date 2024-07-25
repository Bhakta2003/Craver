import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Share } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const ProfileScreen = ({ navigation, route }) => {
  const { profileImage, username, email, phone, address } = route.params || {};

  const handleShare = async (platform) => {
    let message = 'Check out this amazing app!';
    let url = 'https://appurl.com';
    switch (platform) {
      case 'whatsapp':
        message = `whatsapp://send?text=${message} ${url}`;
        break;
      case 'facebook':
        message = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        message = `https://twitter.com/intent/tweet?text=${message} ${url}`;
        break;
      default:
        return;
    }

    try {
      await Share.share({
        message,
      });
    } catch (error) {
      console.log('Error sharing the app:', error);
    }
  };

  const handleLogout = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileBox}>
          <Image
            source={profileImage ? { uri: profileImage } : { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAwMDD39/fe3t78/PwtLS3l5eXJycnNzc21tbXZ2dnx8fFsbGw9PT02NjaHh4dYWFh7e3tnZ2eQkJClpaVhYWFHR0dCQkJ9fX2xsbEeHh69vb3ExMTT09NTU1MaGhpycnILCwuampoSEhIcHBx1HLI5AAAFF0lEQVR4nO3dCXraMBAFYIQxGEJYEpaQjRDa+1+xTShNTG2wRk/Mkzv/CfQ+sDVa3ekYY4wxxhhjjDHGGGOMMcb8X8bFaHG7nUy73e50sr1djIqxdpNw8t5y5aqslr1cu3EAN7N+ZbyDp9mNdgPD5I8PZ+IdTJYJ/5DL94v5PrzvE8343CjewUi7sQKDuUdA5+YD7Qb7Gnnl+/Co3WQ/d94BnbvTbrSHzO8fejTPtBveVLYWBXRunUrEy31gnUka3cZWHNC5rXbjm9gEBHRuo938y/y7iTL6TmMQGNA59q5f+hr9staOcN5jcEDy/2n2BEj4xtwrLgABnVtox6iXQQI6x/sjLkEJl9pBav0AJfyhHaTOEBTQuaF2lBph9dp3O+0oNbqwhH3tKNV6sIDOcc6iIuqZI863qWRupg7ngyibnKlGORLOp8CEfcayZvwGTOgY197GqIqGNiFk5HT0zpgwnwATUj6H0Hcp51TGLTDhvXaYSu3v8TFTGAcz7TCV2l+XFsCEz9phKt0AE75qh6nU/vHhoNnekkY4Fy/yc5uf/DxRljSdDq5sm2pHqRGy+Fv2oB2lBq5sW2lHqTGDJeQs2v6H3xA3UdPn3HXS/poGObbg3HTS+jF+hitpSIsam0300v7ZxCnjv7RzD0zI2eW3fyYKt1HBuUI7TKVx68f4gH2JRxPtKDVwDyLrzjbcg8j5GP4GS6gdpNYOFJBz5ekDal7/RTtIPcwon3TP1yfM8hPnwtMf8gNBX6ackzR/IDoM2q7ioPpcuo+5doQLwn9E4hfpQXBC7QAXhS7PUM6ylYSW36xF9xefU/hV+E/mjwMTko59v8kCt5lSTrKVhfWIlNufT4Stk3IuyZS9BCXk3AxVFnYSmP9F0wnbdMK6zaQs5EFM4TEMK77py+6DgITUg98v8u3QrPtoTr2KE7KeHf2HdMqtq93wxqRTbtS3KZQIj7FxT7KVyQaJKVRsf0nW9HlXK6rkgoQJ/Uc/+G/j49yef4bvHRnUixXV/DbypTC2P+X3P+XcUHqBT6fIvGRYz2dumHMP1CU+N7elU69957Oqn8jI94TPqyaZYVOJz2m9JF+lXgmTK2g++UycWkJOltAS8mt/wvb3hz4Tw+Q7vWr4LJUmNc32l8+8cIJzGB2/BZq0ZhKPfnokfE9sKvGT32TbXru5/nxXgvl3e5Xl/hv4doyHKuuMl6LzpLOedsMbKu7Fh9i2I/4fchh6p9lqRLx3LxtuIEcQV5y/ZF7cAQ/k3z+zhRxukGfVP62IatUe7mKasruCodQZ7JHn8E+9aX89MBshr/uo9rDUeyRfd9HjHcxVljWEdYvU4tpba4fI61ibmb9c77WTP8Z8udTr76/zRI5j9Q1N7OIX56/X/3uWzeNOyxXxO4fL1vGKnULn8ftXN07GIeIUM0of30P2wg/4Ym2x5Vyu+f6sswEOlV+gF5XhoB7HDPeVI7RbyM84YHmDVukDKgDkjZYxBO81kp8OuZbAGif8s6Lxhf1Rcdc7xxN0cXTYiddrCek02AqZaiF7xLXb3lD7E8r7feT3HGKSF+HIr47EJB9Khd5Tci3ylyny2zgxyXf677Wb3pB8IwfjuLeK/DwK8itcMckPuSNvd45JvmeMYXa0CXnZhrsYOC75DWhMM6TnyMdPzDM038mvjkZ+/zYm+b09uE+JxyW/TwP5TY6Y5Gds1/1uCvr8t0kaY4wxxhhjjDHGGGOMMcb89guWJ1UqkABfzwAAAABJRU5ErkJggg==' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{username || 'Jethalal'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {
            profileImage,
            username,
            email,
            phone,
            address,
          })} style={styles.editButton}>
            <Icon name="create-outline" size={34} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Icon name="call-outline" size={24} color="#009966" style={styles.detailIcon} />
          {/* <Text style={styles.detailTitle}>Phone:</Text> */}
          <Text style={styles.detailText}>{phone || '+91 8371537261'}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="mail-outline" size={24} color="#009966" style={styles.detailIcon} />
          {/* <Text style={styles.detailTitle}>Email:</Text> */}
          <Text style={styles.detailText}>{email || 'gadaelectronics@gmail.com'}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="home-outline" size={24} color="#009966" style={styles.detailIcon} />
          {/* <Text style={styles.detailTitle}>Address:</Text> */}
          <Text style={styles.detailText}>{address || '123 Main st. Mumbai'}</Text>
        </View>
      </View>

      <View style={styles.shareContainer}>
        <Text style={styles.shareText}>Share the App</Text>
        <View style={styles.shareButtons}>
          <TouchableOpacity onPress={() => handleShare('whatsapp')}>
            <Icon name="logo-whatsapp" size={40} color="#25D366" style={styles.shareIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleShare('facebook')}>
            <Icon name="logo-facebook" size={40} color="#4267B2" style={styles.shareIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleShare('twitter')}>
            <Icon name="logo-twitter" size={40} color="#1DA1F2" style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileBox: {
    width: screenWidth - 32, 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#009966',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20,
    marginLeft: 0,
    marginVertical:10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  editButton: {
    marginLeft: 60,
  },
  details: {
    marginTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailIcon: {
    marginRight: 10,

  },
  // detailTitle: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginRight: 5,
  // },
  detailText: {
    fontSize: 18,
  },
  shareContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  shareText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shareButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  shareIcon: {
    marginHorizontal: 10,
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
