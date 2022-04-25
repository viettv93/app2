import React from 'react';
import {View, Image, Text, FlatList, Dimensions} from 'react-native';
import {fonts, colors, fontSize} from '../../styles/typography';
import Styles from './Styles';
const dataFlatlist = [
  {
    img: require('../../assets/image/img/img1.png'),
    text: 'Giao siêu nhanh, nhận siêu tốc chỉ từ 18k',
  },
  {
    img: require('../../assets/image/img/img2.png'),
    text: 'Dù gần hay xa, gửi hàng nội thành chỉ 11k',
  },
  {
    img: require('../../assets/image/img/img3.png'),
    text: 'Dù gần hay xa, gửi hàng nội thành chỉ 11k',
  },
  {
    img: require('../../assets/image/img/img4.png'),
    text: 'Giao siêu nhanh, nhận siêu tốc chỉ từ 18k',
  },
];
;
const FlatlistEnd = () => {
  const renderScreen = ({item}) => {
      return(
          <View style={Styles.container_Flalist1}>
            <Image source={item.img} resizeMode="contain"/>
            <Text style={Styles.txtBtnBottom}>{item.text}</Text>
          </View>
      )
  };
  return (
    <View style={Styles.viewMain}>
      <FlatList data={dataFlatlist}
      renderItem={renderScreen} 
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}/>
    </View>
  );
};
export default FlatlistEnd;
