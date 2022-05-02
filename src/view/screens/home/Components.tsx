import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import {colors, fonts, fontSize} from '../../styles/typography';
import FlatlistEnd from './FlatlistEnd';
import FlatListHome from './FlatlistHome';
import HeaderFlatlist from './HeaderFlatlist';
import Styles from './Styles';

const homeData = [
  {id: 1, name: 'Dich vu'},
  {id: 2, name: 'Don hang xu'},
  {id: 3, name: 'Chi tiet'},
  {id: 4, name: 'khuyen mai'},
];

const Home = ({navigation}) => {
  const [id, setId] = useState('355895476');
  const [name, setName] = useState('   Trần Quang Vinh');
  const [comment, setComment] = useState(
    '16:40 - Lý do bưu tá sẽ ghi vào đây, khách hàng chỉ nhận áo, không quần',
  );

  const homeItems = ({item, index}) => {
    if (item.id === 1) {
      return (
        <View style={Styles.container}>
          <FlatListHome navigation={navigation} />
          <View style={Styles.space_3}></View>
        </View>
      );
    }

    if (item.id === 2) {
      return (
        <View style={Styles.container_2}>
          <View style={Styles.rowFlex}>
            <Text style={Styles.txtTitle}>Đơn hàng cần xử lý {''}</Text>
            <Image
              source={require('../../assets/image/icon/wifi.png')}
              resizeMode="contain"
              style={Styles.imgStyles}
            />
          </View>
          <View style={Styles.viewFlex}>
            <View style={Styles.img2Styles}>
              <Image
                source={require('../../assets/image/icon/giao_mot_phan.png')}
                resizeMode="contain"
                style={Styles.boxStyles}
              />
              <Text style={Styles.txtBox}>Giao một</Text>
              <Text style={Styles.txtBox}>phần</Text>
              <View
                style={[Styles.viewNumber1, {backgroundColor: colors.blue}]}>
                <Text style={Styles.textNumber}>99+</Text>
              </View>
            </View>
            <View style={Styles.img2Styles}>
              <Image
                source={require('../../assets/image/icon/sua_COD.png')}
                resizeMode="contain"
                style={Styles.boxStyles}
              />
              <Text style={Styles.txtBox}>Sửa COD</Text>
              <View
                style={[Styles.viewNumber1, {backgroundColor: colors.green}]}>
                <Text style={Styles.textNumber}>99+</Text>
              </View>
            </View>
            <View style={Styles.img2Styles}>
              <Image
                source={require('../../assets/image/icon/cho_hoan_duyet.png')}
                resizeMode="contain"
                style={Styles.boxStyles}
              />
              <Text style={Styles.txtBox}>Chờ duyệt</Text>
              <Text style={Styles.txtBox}>hoàn</Text>
              <View
                style={[Styles.viewNumber1, {backgroundColor: colors.orange}]}>
                <Text style={Styles.textNumber}>99+</Text>
              </View>
            </View>
            <View style={Styles.img2Styles}>
              <Image
                source={require('../../assets/image/icon/sua_thong_tin.png')}
                resizeMode="contain"
                style={Styles.boxStyles}
              />
              <Text style={Styles.txtBox}>Sửa thông</Text>
              <Text style={Styles.txtBox}>tin</Text>
              <View style={[Styles.viewNumber1, {backgroundColor: colors.red}]}>
                <Text style={Styles.textNumber}>99+</Text>
              </View>
            </View>
          </View>
          <View style={Styles.space_1}></View>
        </View>
      );
    }
    if (item.id === 3) {
      return (
        <View style={Styles.container_3}>
          <View style={Styles.rowFlex}>
            <Text style={Styles.txtID}>{id}</Text>
            <Text style={Styles.txtName}>{name}</Text>
            <View style={{flex: 1}}></View>
            <TouchableOpacity
              style={[Styles.btnStyles, {backgroundColor: colors.orange}]}>
              <Text style={Styles.textNumber}>Chờ duyệt hoàn</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.txtComment}>{comment}</Text>
          <View style={Styles.containerButton}>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Gọi NV giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Đánh giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Khiếu nại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Hành trình</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/icon/more.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.space_1}></View>

          <View style={Styles.containerButton}>
            <Text style={Styles.txtID}>{id}</Text>
            <Text style={Styles.txtName}>{name}</Text>
            <View style={Styles.flex1}></View>
            <TouchableOpacity
              style={[Styles.btnStyles, {backgroundColor: colors.blue}]}>
              <Text style={Styles.textNumber}>Sửa COD</Text>
            </TouchableOpacity>
          </View>
          <Text style={Styles.txtComment}>{comment}</Text>

          <View style={Styles.containerButton}>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Gọi NV giao</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Đánh giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Khiếu nại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnBottom}>
              <Text style={Styles.txtBtnBottom}>Hành trình</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/image/icon/more.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.space_3}></View>
        </View>
      );
    }
    if (item.id === 4)
      return (
        <View style={Styles.flex1}>
          <Text style={Styles.txtTitle}>Chương trình khuyến mại</Text>
          <FlatlistEnd />
          <View style={Styles.space_3}></View>
        </View>
      );
  };
  return (
    <View style={Styles.viewMain}>
      <FlatList
        ListHeaderComponent={HeaderFlatlist}
        data={homeData}
        renderItem={homeItems}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
