import React,{useEffect} from "react";
import { SafeAreaView } from "react-native";
import Splash from './src/screens/auth/Splash';
import AuthHeader from "./src/components/AuthHeader";
import Signup from './src/screens/auth/Signup';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

const IOS_CLIENT_ID ='367695804296-4d72i99fgrmklsifd16omvf4gj2mj2ec.apps.googleusercontent.com'
const WEB_CLIENT_ID ='367695804296-mc5pt2ov87akqkc54cd7qadvan7jqr8q.apps.googleusercontent.com'
const REVERSED_CLIENT_ID ='com.googleusercontent.apps.367695804296-4d72i99fgrmklsifd16omvf4gj2mj2ec'
const App = () => {
  useEffect(()=> {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID, 
      offlineAccess: true, 
      iosClientId: IOS_CLIENT_ID,
    })
  }, [])
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App
