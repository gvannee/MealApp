import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";


export default function MealDetailsScreen({ route }) {
    const { id } = route.params;
    const meal = MEALS.filter(item => item.id == id);
    console.log(meal[0]);

    const handleClick = () => {
        console.log("click");
    }
    //divided into information, ingredients, steps
    return (
        <View style={style.container}>

            <ImageBackground source={require('../../assets/image/background.jpg')} style={style.contentBg}>
                <Image src={meal[0].imageUrl} style={style.image} />
                <View style={style.content}>
                    <View>
                    <TouchableOpacity onPress={() => handleMenuItemPress("Option 1")} style={style.menuItem}>
              <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuItemPress("Option 2")} style={style.menuItem}>
              <Text>Option 2</Text>
            </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',

    },

    menuItem: {
        marginHorizontal: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
    },

    content: {
        width: '90%',
        padding: 10,
        backgroundColor: "rgba(226, 241, 230, 0.7)",
        alignItems: 'center',
        alignSelf: 'center'
        
    },

    contentBg: {
        height: '100%',
    },

    container: {
        justifyContent: 'center',
        
    }
})