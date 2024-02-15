import React,{useEffect} from "react";
import { SafeAreaView } from "react-native";
import Splash from './src/screens/auth/Splash';
import AuthHeader from "./src/components/AuthHeader";
import Signup from './src/screens/auth/Signup';
import Signin from "./src/screens/auth/SignIn";

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Config from "react-native-config"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(()=> {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.WEB_CLIENT_ID, 
      offlineAccess: true, 
      iosClientId: Config.IOS_CLIENT_ID,
    })
  }, [])

  const theme={
    colors: {
      background:colors.white
    }
  }
  return (
    <SafeAreaView>
      <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App
