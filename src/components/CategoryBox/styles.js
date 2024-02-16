import { StyleSheet } from "react-native";

import {colors} from '../../utils/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:8
    },
    title:{
        color: colors.grey
    },
    image: {
        width:32,
        height:32
    },
    imageContainer: {
        backgroundColor: colors.lightGray,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8
    }
})