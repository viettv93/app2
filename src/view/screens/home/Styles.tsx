import {fontSize, fonts, colors} from '../../styles/typography';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 60,
    paddingHorizontal: 18,
  },
  space_3: {
    height: 3,
    backgroundColor: colors.background,
  },
  container_2: {
    paddingHorizontal: 18,
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  imgStyles: {
    width: 30,
    height: 30,
  },
  viewFlex: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  img2Styles: {
    flex: 1,
    alignItems: 'center',
  },
  boxStyles: {width: 60, height: 60},
  txtBox: {
    fontFamily: fonts.normal,
    fontSize: 14,
    color: colors.black,
  },
  viewNumber1: {
    height: 22,
    width: 22,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNumber: {
    fontFamily: fonts.normal,
    color: colors.white,
    fontSize: fontSize[10],
  },
  space_1: {height: 1, backgroundColor: colors.background},
  container_3: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  txtID: {
    fontFamily: fonts.normal,
    color: colors.black,
    fontSize: fontSize[14],
    fontWeight: 'bold',
  },
  txtName: {
    fontFamily: fonts.normal,
    color: colors.blue,
    fontSize: fontSize[10],
  },
  btnStyles: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  txtComment: {
    fontFamily: fonts.normal,
    color: colors.black,
    fontSize: fontSize[10],
  },
  containerButton: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  btnBottom: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderBottomColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginRight: 5,
  },
  txtBtnBottom: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: fontSize[14],
    fontWeight: 'bold',
  },
  // FlatlistHome

  flex1: {flex: 1, paddingHorizontal: 18},
  viewMain: {flex: 1, backgroundColor: colors.white},
  container_Flalist1: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_FlatlistHome: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: width * 0.23,
    marginTop: 10,
  },
  flatListStyles: {backgroundColor: colors.white, width: '100%'},
  // HearderFlatlist
  imgBackground: {height: 200, alignItems: 'center', paddingHorizontal:18,},
  viewBackground:{
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewTxtInput:{
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 4,
    width: '90%',
    alignItems: 'center',
  },
  containerView:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: colors.background,
    backgroundColor: colors.white,
    borderWidth: 0.5,
    height: 60,
    marginHorizontal: 18,
    position: 'absolute',
    bottom: -50,
  },
  viewPerson:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.4,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  txtPoint:{
    fontFamily: fonts.normal,
    fontSize: fontSize[14],
    color: colors.gray,
  },
  collum:{
    width: 0.5,
    backgroundColor: colors.gray,
    height: '100%',
  }
});
export default Styles;
