import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Modal,
  PanResponder,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Drawer} from 'react-native-drawer-layout';
import DrawerContent from '../components/DrawerContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Easing} from 'react-native-reanimated';
import HomeHeader from '../components/HomeHeader';
import HomeTab from '../components/HomeTab';
import HomeBottomContainer from '../components/HomeBottomContainer';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Home = () => {
  const [open, setOpen] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [panResponder, setPanResponder] = useState(null);
  const [position] = useState(new Animated.ValueXY({x: 0, y: SCREEN_HEIGHT}));

  useEffect(() => {
    setPanResponder(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, {dy: position.y}], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gesture) => {
          if (gesture.dy > 50) {
            setIsModalVisible(false);
            Animated.timing(position, {
              toValue: {x: 0, y: SCREEN_HEIGHT},
              duration: 250,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.spring(position, {
              toValue: {x: 0, y: 0},
              friction: 5,
              useNativeDriver: false,
            }).start();
          }
        },
      }),
    );
  }, [position]);

  const handleShowModal = () => {
    setIsModalVisible(!isModalVisible);
    Animated.timing(position, {
      toValue: {x: 0, y: 0},
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Drawer
        drawerStyle={{width: '80%'}}
        drawerType="slide"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => <DrawerContent setOpen={setOpen} />}>
        <HomeHeader setOpen={setOpen} />
        <HomeTab />
        <Animated.View
          {...(panResponder && panResponder.panHandlers)}
          style={[
            styles.modalContainer,
            {transform: [{translateY: position.y}]},
          ]}>
          <View
            style={styles.handleBar}
            {...(panResponder && panResponder.panHandlers)}
          />
          <View style={styles.modalContent}>
            <HomeBottomContainer />
          </View>
        </Animated.View>

        <TouchableOpacity onPress={handleShowModal} style={styles.button}>
          <AntDesign name="plus" size={35} color="#fff" />
        </TouchableOpacity>
      </Drawer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#FF6666',
    padding: 10,
    borderRadius: 30,
    right: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    width: 50,
    height: 50,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '50%',
  },
  handleBar: {
    height: 5,
    width: 50,
    borderRadius: 5,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginVertical: 5,
  },
  modalContent: {
    padding: 20,
  },
});

export default Home;
