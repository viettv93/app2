import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import {colors, fonts, fontSize} from '../../styles/typography';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Domestic from './Trongnuoc';
import International from './Quocte';

const Tab = createMaterialTopTabNavigator();

const TaoDon = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.red}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={()=>{}}>
        <Image
          source={require('../../assets/image/icon/back.png')}
          resizeMode="contain"
        />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: fonts.bold,
            color: colors.white,
            fontSize: fontSize[14],
          }}>
          Tạo mới
        </Text>
        <Text> </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.white,
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Trong nước"
            component={Domestic}
            options={{
              headerShown: false,
              tabBarActiveTintColor: colors.red,
              tabBarInactiveTintColor: colors.gray,
              tabBarStyle: {height: 50},
             
            }}
          />
          <Tab.Screen
            name="Quốc tế"
            component={International}
            options={{
              headerShown: false,
              tabBarActiveTintColor: colors.red,
              tabBarInactiveTintColor: colors.gray,
              tabBarStyle: {height: 50},
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default TaoDon;
