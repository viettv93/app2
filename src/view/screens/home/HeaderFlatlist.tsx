import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';

import Styles from './Styles';

const HeaderFlatlist = () => {
  const [visiable, setVisiable] = useState<boolean>(true);
  const [placehold, setPlacehold] = useState<string>('Tìm kiếm');
  const onBlur = () => {
    setVisiable(true);
    setPlacehold('Tìm kiếm');
  };
  const onFocus = () => {
    setVisiable(false);
    setPlacehold('');
  };

  return (
    <View style={Styles.viewMain}>
      <ImageBackground
        source={require('../../assets/image/img/background.png')}
        resizeMode="stretch"
        style={Styles.imgBackground}>
        <View style={Styles.viewBackground}>
          <Image
            source={require('../../assets/image/icon/qrScan.png')}
            resizeMode="contain"
          />
          <View style={{flex:1}}></View>
          <View style={Styles.viewTxtInput}>
            {visiable && (
              <Image
                source={require('../../assets/image/icon/search.png')}
                resizeMode="contain"
              />
            )}
            <TextInput
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placehold}
              style={{padding: 0}}
            />
          </View>
        </View>
        <View style={Styles.containerView}>
          <View style={Styles.viewPerson}>
            <View style={{justifyContent: 'center'}}>
              <Text style={Styles.txtPoint}>Điểm thưởng</Text>
              <View style={Styles.rowFlex}>
                <Image
                  source={require('../../assets/image/icon/crown.png')}
                  resizeMode="contain"
                />
                <Text style={Styles.txtBtnBottom}> 0 điểm</Text>
              </View>
            </View>

            <Image
              source={require('../../assets/image/icon/next.png')}
              resizeMode="contain"
            />
          </View>
          <View style={Styles.collum}></View>
          <View style={Styles.viewPerson}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={Styles.txtPoint}>Tài khoản</Text>
              <View style={Styles.rowFlex}>
                <Image
                  source={require('../../assets/image/icon/wallet.png')}
                  resizeMode="contain"
                />
                <Text style={Styles.txtBtnBottom}> 88.000.000 VNĐ</Text>
              </View>
            </View>

            <Image
              source={require('../../assets/image/icon/next.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default HeaderFlatlist;
