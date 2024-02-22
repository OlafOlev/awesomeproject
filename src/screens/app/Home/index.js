import React from "react";
import { View,Text, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import { categories} from "../../../data/categories"
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
    const renderCategoryItem = (item, index) => {
        console.log('item => ', item)
        return(
            <CategoryBox title={item?.item?.title} image={item?.item?.image}></CategoryBox> 
        )
    }
    const renderProductItem=({item})=> {
        console.log( 'item => ', item)
        return (
            <ProductHomeItem {...item}/>
        )
    }
    return(
        <SafeAreaView>
            <View style={styles.šcontainer}>
                <Header showSearch={true} title="Find All You Need"/>
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index) => String(index)}/>
                <FlatList numColumns={2} data={products} renderItem={renderProductItem} keyExtractor={(item)=> String(item.id)} ListFooterComponent={<View style={{height:250}}/> } />
            </View>
        </SafeAreaView>

    )
}
export default React.memo(Home)