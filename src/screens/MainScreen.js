import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryList from "../components/CategoryList";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Styles } from "../constants/Styles";


export default function MainScreen({ navigation }) {
    const categories = CATEGORIES;
    const windowHeight = Dimensions.get('window').height;
    const tabBarHeight = useBottomTabBarHeight();
    const scrollHeight = windowHeight - tabBarHeight;

    return (
        <ScrollView style={[ { height: scrollHeight }]}>
            <Image source={require('../../assets/image/intro.png')} style={style.img} />
            <View>
                <Text style={style.text}>Choose the type of meal you want</Text>
            </View>
            <CategoryList categories={categories} navigation={navigation} />
        </ScrollView>

    )
}

const style = StyleSheet.create({
    img: {
        height: 300,   
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        fontSize: 17,
        fontFamily: 'Poppins-Bold'

    }
})