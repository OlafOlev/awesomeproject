import {Dimensions, StyleSheet } from "react-native";

import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        marginHorizontal:8,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
    title:{
        color:colors.textGray,
    },
    image:{
       width:(width-34) / 2,
       height:220,
       borderRadius:8,
    },
    price:{
        color:colors.black
    }
    
})