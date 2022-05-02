import React from 'react';
import {View, Text} from 'react-native';
import {fonts, colors} from '../../styles/typography';

const FaceBookScreen = (props: any) => {
  return <View style={{flex: 1, backgroundColor: colors.orange}}>
    <Text>{JSON.stringify(props.navigation)}</Text>
  </View>;
};
export default FaceBookScreen;
