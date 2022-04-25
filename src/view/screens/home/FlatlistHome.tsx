import React from 'react';
import {FlatList, View, Image, Text, Dimensions} from 'react-native';
import {colors, fonts, fontSize} from '../../styles/typography';
import Styles from './Styles';

const { width, height } = Dimensions.get('screen');

const array1 = [
  {
    img: require('../../assets/image/icon/tao_don.png'),
    title: 'Tạo đơn ',
  },
  {img: require('../../assets/image/icon/don_hang.png'), title: 'Đơn hàng'},
  {img: require('../../assets/image/icon/tien_hang.png'), title: 'Tiền hàng'},
  {img: require('../../assets/image/icon/tim_bank.png'), title: 'Tìm BC'},
  {
    img: require('../../assets/image/icon/doanh_thu.png'),
    title: 'Doanh thu',
  },
  {img: require('../../assets/image/icon/hoa_hong.png'), title: 'Hoa hồng'},
  {img: require('../../assets/image/icon/kho_hang.png'), title: 'Kho hàng'},
];
const FlatListHome = () => {
  const renderItem1 = ({item, index}) => {
    return (
      <View
        style={Styles.container_FlatlistHome}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={Styles.boxStyles}
        />
        <Text style={Styles.txtBox}>{item.title}</Text>
      </View>
    );
  };
 

  return (
    <View
      style={Styles.container_Flalist1}>
      <FlatList
        style={Styles.flatListStyles}
        data={array1}
        renderItem={renderItem1}
        numColumns={4}
      />
      
    </View>
  );
};

export default FlatListHome;
