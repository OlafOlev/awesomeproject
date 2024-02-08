import React from "react";
import { Text, View, Image 
} from "react-native";

const Splash = () => {
    return(
        <View>
            <Image source={require('../../../assets/splash_image.png')} />
            <Text>You'll Find All you need Here!</Text>
        </View>
    )
}
export default Splash