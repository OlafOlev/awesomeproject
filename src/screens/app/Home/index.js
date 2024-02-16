import React from "react";
import { View,Text, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import { categories} from "../../../data/categories"
import CategoryBox from "../../../components/CategoryBox";

const Home = () => {
    const renderCategoryItem = (item, index) => {
        console.log('item => ', item)
        return(
            <CategoryBox title={item?.item?.title} image={item?.item?.image}></CategoryBox> 
        )
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need"/>
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index) => String(index)}/>
                <Text>Home</Text>
            </View>
        </SafeAreaView>

    )
}
export default React.memo(Home)