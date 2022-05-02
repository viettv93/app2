import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../view/screens/home/Components';
import FaceBookScreen from '../view/screens/faceBook/Component';
import Notification from '../view/screens/notifi/Components';
import Menu from '../view/screens/menu/Components';
import {colors} from '../view/styles/typography';
import TaoDon from '../view/screens/taoDon/Component';
import TestScreen from '../view/screens/test';
import Don_Hang from '../view/screens/donhang/Component';
import Tien_Hang from '../view/screens/tienhang/Component';
import TimBuuCuc from '../view/screens/timBuuCuc/Component';
import Doanh_thu from '../view/screens/doanhthu/Component';
import HoaHong from '../view/screens/hoahong/Component';
import Kho_hang from '../view/screens/khohang/Component';

const AppStack = createNativeStackNavigator();
const AppTab = createBottomTabNavigator();

const BottomTabHome = () => {
  const BottomTab = () => {
    return (
      <AppTab.Navigator>
        <AppTab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              if (focused)
                return (
                  <Image
                    source={require('../view/assets/image/icon/home_selected.png')}
                    resizeMode="contain"
                  />
                );
              else
                return (
                  <Image
                    source={require('../view/assets/image/icon/home_default.png')}
                    resizeMode="contain"
                  />
                );
            },
            tabBarActiveTintColor: colors.red,
            tabBarInactiveTintColor: colors.black,
            tabBarStyle: {height: 40},
          }}
        />
        <AppTab.Screen
          name="FaceBook"
          component={FaceBookScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              if (focused)
                return (
                  <Image
                    source={require('../view/assets/image/icon/face_selected.png')}
                    resizeMode="contain"
                  />
                );
              else
                return (
                  <Image
                    source={require('../view/assets/image/icon/face_default.png')}
                    resizeMode="contain"
                  />
                );
            },
            tabBarActiveTintColor: colors.red,
            tabBarInactiveTintColor: colors.black,
            tabBarStyle: {height: 40},
          }}
        />
        <AppTab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              if (focused)
                return (
                  <Image
                    source={require('../view/assets/image/icon/notification_seleted.png')}
                    resizeMode="contain"
                  />
                );
              else
                return (
                  <Image
                    source={require('../view/assets/image/icon/notification_default.png')}
                    resizeMode="contain"
                  />
                );
            },
            tabBarActiveTintColor: colors.red,
            tabBarInactiveTintColor: colors.black,
            tabBarStyle: {height: 40},
          }}
        />
        <AppTab.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              if (focused)
                return (
                  <Image
                    source={require('../view/assets/image/icon/menu_selected.png')}
                    resizeMode="contain"
                  />
                );
              else
                return (
                  <Image
                    source={require('../view/assets/image/icon/menu_default.png')}
                    resizeMode="contain"
                  />
                );
            },
            tabBarActiveTintColor: colors.red,
            tabBarInactiveTintColor: colors.black,
            tabBarStyle: {height: 40},
          }}
        />
      </AppTab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Main"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="order"
          component={Don_Hang}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="money"
          component={Tien_Hang}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="search"
          component={TimBuuCuc}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="turnover"
          component={Doanh_thu}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="create order"
          component={TaoDon}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="poundage"
          component={HoaHong}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="warehouse"
          component={Kho_hang}
          options={{headerShown: false}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabHome;
