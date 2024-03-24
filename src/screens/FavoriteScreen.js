import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealListItem from "../components/MealListItem";
import FavoriteList from "../components/FavoriteList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";


export default function FavoriteScreen ({navigation}) {
    const isFocused = useIsFocused();
    const [favMeal, setFavMeal] = useState([]);
    const updateFavoriteMeals = () => {
        const favoriteMeals = MEALS.filter(item => item.isFavorite);
        setFavMeal(favoriteMeals);
    };

    // This effect will run whenever the screen becomes focused
    useEffect(() => {
        if (isFocused) {
            console.log('Home screen is focused');
        }
        updateFavoriteMeals();
    }, [isFocused]);
    

    return (
        <View style={styles.container}>
            {
                (favMeal.length != 0) ? <FavoriteList navigation={navigation} data={favMeal} /> 
                : <View style={styles.container}><Text style={styles.text}>There is no favorite</Text></View>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    }
})