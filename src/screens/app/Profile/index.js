import React from "react";
import { View,Text} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        </SafeAreaView>

    )
}
export default React.memo(Profile)