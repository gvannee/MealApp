import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryList from "../components/CategoryList";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Styles } from "../constants/Styles";


export default function MainScreen({navigation}) {
    const categories = CATEGORIES;
    const windowHeight = Dimensions.get('window').height;
    const tabBarHeight = useBottomTabBarHeight();
    const scrollHeight = windowHeight - tabBarHeight;

    return (
        <ScrollView style={[Styles.container, {height: scrollHeight}]}>
            <CategoryList categories={categories} navigation={navigation}/>
        </ScrollView>

    )
}

const style = StyleSheet.create({
    scroll: {
        
    }
})