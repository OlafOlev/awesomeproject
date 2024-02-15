import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from "../../../components/Button";
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder="JohnSon@is.hard" />
      <Input isPassword label="Password" placeholder="*************" />
      <Button style={styles.button} title="Sign In" />
      <Separator text="Or sign in with"/>
      <GoogleLogin/>
      <Text style={styles.footerText}>Don't have an account? 
        <Text style={styles.footerLink}> Sign Up</Text>  
      </Text>
    </View>
  );
};

export default Signin;
