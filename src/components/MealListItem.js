import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, View, Text, Dimensions } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import ButtonCustom from "./ButtonCustom";
const { width } = Dimensions.get('window');
const itemWidth = (width) / 2 - 20;

export default function MealListItem({ navigation, item }) {
    const categories = item.categoryIds;
    const [color, setColor] = useState('#CEC7C7')
    const categoryTitles = categories.map(id => {
        const category = CATEGORIES.find(type => type.id === id);
        return category ? category.title : null;
    });

    const onClick = () => {
        if (color == '#CEC7C7') {
            setColor('#FB0000') //red
            item.setIsFavorite(true)
            
        } else { //
            setColor('#CEC7C7') //grey
            item.setIsFavorite(false)
            
        }

    }
    return (
        <Pressable style={style.container} onPress={() => { navigation.navigate('Details', { id: item.id, name: item.title }) }}>
            <View style={style.btn}>
                <Image source={require('../../assets/image/circle.png')} />
                <MaterialCommunityIcons name="heart" color={item.isFavorite ? '#FB0000' : '#CEC7C7'} size={21} onPress={onClick} />
            </View>
            <Image src={item.imageUrl} style={style.img} />
            <Text style={style.title}>{item.title}</Text>
            <View style={style.category}>
                {
                    categoryTitles.map((element, index) => (
                        <ButtonCustom title={element} key={index} />
                    ))
                }
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        width: itemWidth,
        padding: 10,
        borderColor: '#C5C5C5',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 10,

    },

    btn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    img: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'cover',
        marginTop: 10
    },

    title: {
        fontFamily: 'Poppins-Semibold',
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: 11,
        marginTop: 10,
        textAlign: 'center'
    },

    category: {
        marginTop: 10,
        gap: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})