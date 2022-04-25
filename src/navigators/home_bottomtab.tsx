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
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabHome;
