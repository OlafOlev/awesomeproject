import React from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";
import Header from "../../../components/Header";
import { SafeAreaView} from "react-native-safe-area-context";
const Home = () => {
    return (
        
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Cookie Clicker App" />
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)