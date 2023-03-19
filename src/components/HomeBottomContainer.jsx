import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeBottomContainer = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          backgroundColor: '#F1F5F9',
          padding: 3,
        }}>
        <Fontisto name="whatsapp" size={30} color="#0DC143" />
        <Text style={{color: '#0DC143', fontSize: 18}}>Whatsapp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          backgroundColor: '#F1F5F9',
          padding: 3,
        }}>
        <FontAwesome name="telegram" size={30} color="#239AD6" />
        <Text style={{color: '#239AD6', fontSize: 18}}>Telegram</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          backgroundColor: '#F1F5F9',
          padding: 3,
        }}>
        <MaterialCommunityIcons name="email" size={30} color="#D97706" />
        <Text style={{color: '#D97706', fontSize: 18}}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          backgroundColor: '#F1F5F9',
          padding: 3,
        }}>
        <MaterialCommunityIcons name="phone" size={30} color="#16A34A" />
        <Text style={{color: '#16A34A', fontSize: 18}}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          backgroundColor: '#F1F5F9',
          padding: 3,
        }}>
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={30}
          color="#B91C1C"
        />
        <Text style={{color: '#B91C1C', fontSize: 18}}>SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          backgroundColor: '#F1F5F9',
          padding: 3,
        }}>
        <Entypo name="facebook-with-circle" size={30} color="#0C86EE" />
        <Text style={{color: '#0C86EE', fontSize: 18}}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeBottomContainer;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    rowGap: 12,
    flexDirection: 'column',
  },
});
