import React from "react";
import { Image, TouchableOpacity} from "react-native";

import { styles } from "./styles";

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const GoogleLogin = ({text}) => {
    const signIn = async () => {
        console.log("test")
        try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        // this.setState({ userInfo });
        console.log('userInfo => ', userInfo)
        } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        } else if (error.code === statusCodes. IN_PROGRESS) {
        // operation (e.g. sign in) is in progress alreadyš
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        } else {
        // some other error happened
        }
        }
    }   
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={signIn}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin)