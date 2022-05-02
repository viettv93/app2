import React from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors, fonts, fontSize} from '../../styles/typography';
import Styles from './Styles';
import Screen from '../../../constants/Screen';
const {width, height} = Dimensions.get('screen');

const array1 = [
  {
    img: require('../../assets/image/icon/tao_don.png'),
    title: 'Tạo đơn',id: 'create order'
  },
  {img: require('../../assets/image/icon/don_hang.png'), title: 'Đơn hàng', id: 'order'},
  {img: require('../../assets/image/icon/tien_hang.png'), title: 'Tiền hàng', id: 'money'},
  {img: require('../../assets/image/icon/tim_bank.png'), title: 'Tìm BC', id :'search'},
  {
    img: require('../../assets/image/icon/doanh_thu.png'),
    title: 'Doanh thu',id: 'turnover'
  },
  {img: require('../../assets/image/icon/hoa_hong.png'), title: 'Hoa hồng', id: 'poundage'},
  {img: require('../../assets/image/icon/kho_hang.png'), title: 'Kho hàng', id: 'warehouse'},
];
const FlatListHome = (props) => {
 
  const renderItem1 = ({item, index}) => {
    
    return (
      <View style={Styles.container_FlatlistHome}>
        <TouchableOpacity onPress={()=>{
           if (item.id==='create order') (props.navigation.navigate('create order'))
            else if (item.id ==='order')( props.navigation.navigate('order'))
            else if (item.id ==='money')( props.navigation.navigate('money'))
            else if (item.id ==='search')( props.navigation.navigate('search'))
            else if (item.id ==='turnover')( props.navigation.navigate('turnover'))
            else if (item.id ==='poundage')( props.navigation.navigate('poundage'))
            else  props.navigation.navigate('warehouse')
        }}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={Styles.boxStyles}
          />
          <Text style={Styles.txtBox}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Styles.container_Flalist1}>
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
