import React from 'react';
import {Image, Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Checkbox from '../../../components/Checkbox';
import {colors, fonts, fontSize} from '../../styles/typography';

const Domestic = () => {
  const onPostOfficeChange = (value: boolean) => {};
 const getAddressReceiver =(props: any)=>{}
  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 12,}}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.background,
          marginBottom: 10
          }}>
          <Text
            style={{
              fontFamily: fonts.bold,
              fontSize: fontSize[14],
              
            }}>
            NGƯỜI GỬI - NGƯỜI NHẬN
          </Text>
          <Image
            source={require('../../assets/image/icon/down.png')}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <View style={{backgroundColor: colors.white}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10
          }}>
          <Text
            style={{
              fontFamily: fonts.bold,
              color: colors.red,
              fontSize: fontSize[14],
              fontWeight: 'bold'
            }}>
            Người gửi
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox onChange={onPostOfficeChange} />
            <Text
              style={{
                fontFamily: fonts.normal,
                color: colors.black,
                fontSize: fontSize[14],
              }}>
              {'  Gửi tại bưu cục   '}
                  
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10
        }}>
        <Text
          style={{
            fontFamily: fonts.normal,
            color: colors.black,
            fontSize: fontSize[14],
            fontWeight: 'bold',
          }}>
          {'Cửa hàng rau quả Oganic  .'}
        </Text>
        <Text
          style={{
            fontFamily: fonts.normal,
            color: colors.black,
            fontSize: fontSize[14],
          }}>
          {' '}
          0988221345
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../assets/image/icon/edit.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10
          }}>
          <Text
            style={{
              fontFamily: fonts.bold,
              color: colors.red,
              fontSize: fontSize[14],
              fontWeight: 'bold'
            }}>
            Người nhận
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox onChange={onPostOfficeChange} />
            <Text
              style={{
                fontFamily: fonts.normal,
                color: colors.black,
                fontSize: fontSize[14],
              }}>
              {' Nhận tại bưu cục'}
              
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderWidth: 0.5, borderColor: colors.gray, marginBottom:5, padding:5}}>
            <Image source={require('../../assets/image/icon/sdt.png')} resizeMode= 'contain' />
            <TextInput placeholder='  Điện thoại' style={{padding: 0, width: '88%'}}/>
           <TouchableOpacity onPress={()=>{}}>
           <Image source={require('../../assets/image/icon/danh_ba.png')} resizeMode='contain'/>
           </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderWidth: 0.5, borderColor: colors.gray,marginBottom:5, padding: 5}}>
            <Image source={require('../../assets/image/icon/user.png')} resizeMode= 'contain' />
            <TextInput placeholder='  Họ tên' style={{padding: 0, width: '88%'}}/>
            
          </View>
          <TouchableOpacity onPress={getAddressReceiver}>
          <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderWidth: 0.5, borderColor: colors.gray,marginBottom:5, padding:5}}>
            <Image source={require('../../assets/image/icon/address.png')} resizeMode= 'contain' />
            <Text style={{fontFamily: fonts.normal, color:colors.gray, fontSize:fontSize[14],marginVertical: 3}}>  Địa chỉ</Text>
          </View>
          </TouchableOpacity>

    </View>
  );
};
export default Domestic;
