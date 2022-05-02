import React, {useState} from 'react';
import {StyleSheet,  Image, TouchableOpacity} from 'react-native';

const Checkbox = (props: any) => {

  const [checked, setChecked] = useState<boolean>(false);

  const onCheckedChange = () => {
    setChecked(!checked);
    props.onChange(checked);
  }

  return (
    <TouchableOpacity onPress={onCheckedChange}>
      <Image source={checked ? require('../view/assets/image/icon/box_checked.png') : require('../view/assets/image/icon/box.png')} />
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
