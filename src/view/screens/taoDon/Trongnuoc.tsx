import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, fontSize} from '../../styles/typography'


const Domestic = () => {
  return (
    <View style={{backgroundColor: 'white', flex:1, paddingHorizontal: 18}}>
     <TouchableOpacity>
     <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{fontFamily:fonts.bold, fontSize:fontSize[14], color:colors.gray}}>NGƯỜI GỬI - NGƯỜI NHẬN</Text>
        <Image source={require('../../assets/image/icon/down.png')} resizeMode='contain'/>
      </View>
     </TouchableOpacity>
     
          <View style={{flex:1, backgroundColor: colors.white}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text>Người gửi</Text>
              
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
               
             <Text>Gửi tại bưu cục</Text>
             </View>
            </View>
          </View>
     
    </View>
  );
};
export default Domestic;
