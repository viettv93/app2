import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'

const fonts={
    normal: "FS PFBeauSansPro-Black",
    bold: "FS PFBeauSansPro-Bold",
    italic:"FS PFBeauSansPro-BbookItalic",
    
}
const colors ={
    orange: "#EB960A",
    red: "#EE0033",
    blue: "#2D9CDB",
    green :"#44AB4A",
    white : "#FFFFFF",
    black: '#44494D',
    gray:'#97A0AF',
    background: '#E5E5E5'
    

}
 export const fontSize ={
    10:RFPercentage(2),
    14:RFPercentage(2.2),
    16:RFPercentage(3.2)
}
export {fonts, colors}