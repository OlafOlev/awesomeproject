import React from "react";
import { View,Text} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        </SafeAreaView>

    )
}
export default React.memo(Home)