import React from "react";
import { ScrollView,Text, Image, View} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ImageCarusel from "../../../components/ImageCarusel";

const ProductDetails = ({navigation,route}) => {
    const {product} = route.params || {}
    console.log('product description => ',product.description)

    const onBackPress = () => {
        navigation.goBack()
    }
    return(
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarusel images={product?.images}/>
                ):(
                    <Image style={styles.image} source={{uri:product?.image}}/>
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')}/>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/bookmark.png')}/>
                </Pressable>
                <Button title="Contact Seller"/>
            </View>
        </SafeAreaView>

    )
}
export default React.memo(ProductDetails)