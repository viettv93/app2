import React from 'react';
import {View} from 'react-native';
import BottomTabHome from './navigators/home_bottomtab';

const App = () => {
  return (
    <View style={{flex: 1}}>
       
      <BottomTabHome/>
      
    </View>
  );
};
export default App;
