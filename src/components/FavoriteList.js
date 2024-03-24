import { FlatList, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import MealListItem from "./MealListItem";
export default function FavoriteList({ navigation, data }) {

    return (
        <SafeAreaView style={style.container}>
            <FlatList data={data}
                renderItem={({ item, index }) => 
                <MealListItem item={item} key={index} navigation={navigation} />}
                keyExtractor={item => item.id}
                numColumns={2}                  // set number of columns 
                columnWrapperStyle={style.row}
                contentContainerStyle={style.contentContainer}
                
            />
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        marginBottom: 15,
        flexDirection: 'row'
    },

    row: {
        flex: 1,
        justifyContent: "space-around",

    }

})
