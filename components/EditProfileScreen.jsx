import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet ,ScrollView} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = ({ navigation, route }) => {
  const { profileImage: initialProfileImage, username: initialUsername, email: initialEmail, phone: initialPhone, address: initialAddress } = route.params;

  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [address, setAddress] = useState(initialAddress);

  const [errors, setErrors] = useState({});

  const handleChoosePhoto = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const handleDone = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone is required';
    if (!address) newErrors.address = 'Address is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigation.navigate('Profile', {
        profileImage,
        username,
        email,
        phone,
        address,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage ? { uri: profileImage } : { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAwMDD39/fe3t78/PwtLS3l5eXJycnNzc21tbXZ2dnx8fFsbGw9PT02NjaHh4dYWFh7e3tnZ2eQkJClpaVhYWFHR0dCQkJ9fX2xsbEeHh69vb3ExMTT09NTU1MaGhpycnILCwuampoSEhIcHBx1HLI5AAAFF0lEQVR4nO3dCXraMBAFYIQxGEJYEpaQjRDa+1+xTShNTG2wRk/Mkzv/CfQ+sDVa3ekYY4wxxhhjjDHGGGOMMcb8X8bFaHG7nUy73e50sr1djIqxdpNw8t5y5aqslr1cu3EAN7N+ZbyDp9mNdgPD5I8PZ+IdTJYJ/5DL94v5PrzvE8343CjewUi7sQKDuUdA5+YD7Qb7Gnnl+/Co3WQ/d94BnbvTbrSHzO8fejTPtBveVLYWBXRunUrEy31gnUka3cZWHNC5rXbjm9gEBHRuo938y/y7iTL6TmMQGNA59q5f+hr9staOcN5jcEDy/2n2BEj4xtwrLgABnVtox6iXQQI6x/sjLkEJl9pBav0AJfyhHaTOEBTQuaF2lBph9dp3O+0oNbqwhH3tKNV6sIDOcc6iIuqZI863qWRupg7ngyibnKlGORLOp8CEfcayZvwGTOgY197GqIqGNiFk5HT0zpgwnwATUj6H0Hcp51TGLTDhvXaYSu3v8TFTGAcz7TCV2l+XFsCEz9phKt0AE75qh6nU/vHhoNnekkY4Fy/yc5uf/DxRljSdDq5sm2pHqRGy+Fv2oB2lBq5sW2lHqTGDJeQs2v6H3xA3UdPn3HXS/poGObbg3HTS+jF+hitpSIsam0300v7ZxCnjv7RzD0zI2eW3fyYKt1HBuUI7TKVx68f4gH2JRxPtKDVwDyLrzjbcg8j5GP4GS6gdpNYOFJBz5ekDal7/RTtIPcwon3TP1yfM8hPnwtMf8gNBX6ackzR/IDoM2q7ioPpcuo+5doQLwn9E4hfpQXBC7QAXhS7PUM6ylYSW36xF9xefU/hV+E/mjwMTko59v8kCt5lSTrKVhfWIlNufT4Stk3IuyZS9BCXk3AxVFnYSmP9F0wnbdMK6zaQs5EFM4TEMK77py+6DgITUg98v8u3QrPtoTr2KE7KeHf2HdMqtq93wxqRTbtS3KZQIj7FxT7KVyQaJKVRsf0nW9HlXK6rkgoQJ/Uc/+G/j49yef4bvHRnUixXV/DbypTC2P+X3P+XcUHqBT6fIvGRYz2dumHMP1CU+N7elU69957Oqn8jI94TPqyaZYVOJz2m9JF+lXgmTK2g++UycWkJOltAS8mt/wvb3hz4Tw+Q7vWr4LJUmNc32l8+8cIJzGB2/BZq0ZhKPfnokfE9sKvGT32TbXru5/nxXgvl3e5Xl/hv4doyHKuuMl6LzpLOedsMbKu7Fh9i2I/4fchh6p9lqRLx3LxtuIEcQV5y/ZF7cAQ/k3z+zhRxukGfVP62IatUe7mKasruCodQZ7JHn8E+9aX89MBshr/uo9rDUeyRfd9HjHcxVljWEdYvU4tpba4fI61ibmb9c77WTP8Z8udTr76/zRI5j9Q1N7OIX56/X/3uWzeNOyxXxO4fL1vGKnULn8ftXN07GIeIUM0of30P2wg/4Ym2x5Vyu+f6sswEOlV+gF5XhoB7HDPeVI7RbyM84YHmDVukDKgDkjZYxBO81kp8OuZbAGif8s6Lxhf1Rcdc7xxN0cXTYiddrCek02AqZaiF7xLXb3lD7E8r7feT3HGKSF+HIr47EJB9Khd5Tci3ylyny2zgxyXf677Wb3pB8IwfjuLeK/DwK8itcMckPuSNvd45JvmeMYXa0CXnZhrsYOC75DWhMM6TnyMdPzDM038mvjkZ+/zYm+b09uE+JxyW/TwP5TY6Y5Gds1/1uCvr8t0kaY4wxxhhjjDHGGGOMMcb89guWJ1UqkABfzwAAAABJRU5ErkJggg==' }} style={styles.profileImage} />
        <TouchableOpacity onPress={handleChoosePhoto} style={styles.profileButton}>
          <Text style={styles.doneButtonText}>Change profile photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.shadowBox}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} value={username} onChangeText={setUsername} />
          {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.shadowBox}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.shadowBox}>
          <Text style={styles.label}>Phone</Text>
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.shadowBox}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} value={address} onChangeText={setAddress} />
          {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom:30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
  },
  doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom:10,
  },
  profileButton: {
    bottom: 0,
    right: 0,
    backgroundColor: '#FFA500',
    borderRadius: 7,
    padding: 10,

  },
  cameraIcon: {
    backgroundColor: '#FFA500',
    borderRadius: 15,
  },
  inputContainer: {
    marginVertical: 10,
  },
  shadowBox: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default EditProfileScreen;
