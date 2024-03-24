import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";


export default function ListMealScreen({ navigation, route }) {
    const { id } = route.params;
    const mealsWithCategory = MEALS.filter(meal => meal.categoryIds.includes(id));

    console.log(mealsWithCategory);


    return (
        <View style={style.container}>
            <MealList data={mealsWithCategory} navigation={navigation}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingBottom: 30
    }
})