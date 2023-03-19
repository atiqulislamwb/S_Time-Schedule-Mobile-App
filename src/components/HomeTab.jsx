import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Pending from './Pending';
import Done from './Done';
import Deleted from './Deleted';
import Failed from './Failed';

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={{
            borderBottomColor: activeTab === 'tab1' ? '#FF6666' : '#FEFFFF',
            borderBottomWidth: 2,
          }}
          onPress={() => handleTabChange('tab1')}>
          <View style={{padding: 12}}>
            <Text
              style={{
                color: activeTab === 'tab1' ? '#FF6666' : '#94A3B8',
                fontSize: 14,
              }}>
              PENDING
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: activeTab === 'tab2' ? '#FF6666' : '#FEFFFF',

            borderBottomWidth: 2,
          }}
          onPress={() => handleTabChange('tab2')}>
          <View style={{padding: 12}}>
            <Text
              style={{
                color: activeTab === 'tab2' ? '#FF6666' : '#94A3B8',
                fontSize: 14,
              }}>
              DONE
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: activeTab === 'tab3' ? '#FF6666' : '#FEFFFF',

            borderBottomWidth: 2,
          }}
          onPress={() => handleTabChange('tab3')}>
          <View style={{padding: 12}}>
            <Text
              style={{
                color: activeTab === 'tab3' ? '#FF6666' : '#94A3B8',
                fontSize: 14,
              }}>
              DELETED
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: activeTab === 'tab4' ? '#FF6666' : '#FEFFFF',

            borderBottomWidth: 2,
          }}
          onPress={() => handleTabChange('tab4')}>
          <View style={{padding: 12}}>
            <Text
              style={{
                color: activeTab === 'tab4' ? '#FF6666' : '#94A3B8',
                fontSize: 14,
              }}>
              FAILED
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={{padding: 2}} showsVerticalScrollIndicator={false}>
        {activeTab === 'tab1' && (
          <View>
            <Pending />
          </View>
        )}

        {activeTab === 'tab2' && (
          <View>
            <Done />
          </View>
        )}

        {activeTab === 'tab3' && (
          <View>
            <Deleted />
          </View>
        )}

        {activeTab === 'tab4' && (
          <View>
            <Failed />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 2,
  },
});
