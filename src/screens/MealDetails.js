import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { StyleSheet } from "react-native";


export default function MealDetailsScreen({ route }) {
    const { id } = route.params;
    const meal = MEALS.filter(item => item.id == id);
    const ingredients = meal[0].ingredients;
    const steps = meal[0].steps;

    const toUpperCase = (value) => {
        return value.toUpperCase();
    }
    //divided into information, ingredients, steps
    return (
        <View style={style.container}>

            <ImageBackground source={require('../../assets/image/background.jpg')} style={style.contentBg}>
                <Image src={meal[0].imageUrl} style={style.image} />
                <ScrollView style={style.content} contentContainerStyle={{ alignItems: 'center'}}>
                    <View style={style.padding}>
                        <Text style={style.header}>Information </Text>
                        <View>
                            <View style={style.information}>
                                <Text style={style.contentTitle}>Affordability:</Text>
                                <Text style={style.contentInfo}>{toUpperCase(meal[0].affordability)}</Text>
                            </View>
                            <View style={style.information}>
                                <Text style={style.contentTitle}>Complexity: </Text>
                                <Text style={style.contentInfo}>{toUpperCase(meal[0].complexity)}</Text>
                            </View>
                            <View style={style.information}>
                                <Text style={style.contentTitle}>Duration: </Text>
                                <Text style={style.contentInfo}>{meal[0].duration}</Text>
                            </View>
                            <View style={style.information}>
                                <Text style={style.contentTitle}>Gluten Free: </Text>
                                <Text style={style.contentInfo}>{meal[0].isGlutenFree ? 'Yes' : 'No'}</Text>
                            </View>
                            <View style={style.information}>
                                <Text style={style.contentTitle}>Lastose Free: </Text>
                                <Text style={style.contentInfo}>{meal[0].isLactoseFree ? 'Yes' : 'No'}</Text>
                            </View>
                            <View style={style.information}>
                                <Text style={style.contentTitle}>Vegan: </Text>
                                <Text style={style.contentInfo}>{meal[0].isVegan ? 'Yes' : 'No'}</Text>
                            </View>
                        </View>
                        <Text style={style.header}>Ingredients </Text>
                        <View style={style.gap}>
                            {ingredients.map((item, index) => (
                                <Text key={index} style={style.contentSize}>{`\u2022 ${item}`}</Text>
                            ))}
                        </View>
                        <Text style={style.header}>How to cook</Text>
                        <View style={style.gap}>
                            {steps.map((item, index) => (
                                <Text key={index} style={style.contentSize}>{index + 1}: {item}</Text>
                            ))}
                        </View>
                    </View>
                </ScrollView>
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

    header: {
        fontFamily: 'Poppins-Bold',
        alignSelf: 'center',
        fontSize: 15
    },

    padding: {
        paddingBottom: 20
    },

    content: {
        width: '90%',
        padding: 10,
        backgroundColor: "rgba(226, 241, 230, 0.9)",
        alignSelf: 'center',
        marginBottom: 20,
        paddingBottom: 20
    },

    contentTitle: {
        fontFamily: 'Poppins-Semibold',

    },

    contentBg: {
        height: '100%',
    },

    container: {
        justifyContent: 'center'
    },

    information: {
        flexDirection: 'row',
        gap: 5
    },

    gap: {
        gap: 5
    },

    contentSize:{
        fontFamily: 'Poppins-Medium',
        fontSize: 15
    },

    contentInfo: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13
    }
})