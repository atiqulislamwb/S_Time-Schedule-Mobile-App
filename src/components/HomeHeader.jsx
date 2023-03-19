import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const HomeHeader = ({setOpen}) => {
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: '#FF6666',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => setOpen(prevOpen => !prevOpen)}>
          <AntDesign name="menu-fold" size={28} color="#fff" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            marginLeft: 10,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          S_Time
        </Text>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <AntDesign name="search1" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="filter" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={23} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    columnGap: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
