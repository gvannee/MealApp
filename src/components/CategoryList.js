import { StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem";


export default function CategoryList({navigation, categories}) {

    return (
        <View style = {style.container}>
            {
                categories.map((category, index) => 
                    <CategoryItem category={category} navigation={navigation} key={index}/>
                )
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        gap: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 40
    }
})