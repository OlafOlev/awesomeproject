import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Son" />
      <Input label="Email" placeholder="JohnSon@is.hard" />
      <Input isPassword label="Password" placeholder="*************" />
      <View style={styles.agreeRow}>

        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>I agree with<Text style={styles.agreeTextBold}> Terms</Text> & <Text style={styles.agreeTextBold}> Privacy</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
