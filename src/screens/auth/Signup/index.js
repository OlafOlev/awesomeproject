import React from "react";
import { Text, View, Image,Pressable} from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

const Signup = () => {
    return(
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="John Son"/>
            <Input label="Email" placeholder="JohnSon@is.hard"/>
            <Input isPassword label="Password" placeholder="*************"/>
        </View>
    )
}
export default Signup