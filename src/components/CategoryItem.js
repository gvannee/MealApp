import { Pressable, StyleSheet, Text, View } from "react-native";


export default function CategoryItem({ navigation, category }) {
    const onClick = (id) => {
        navigation.navigate('Meals')
    }

    return (
        <Pressable style={[style.container, {
            backgroundColor: category.color
        }]} onPress={() => {
            navigation.navigate('Meals', {title: category.title})
        }

        }>
            <Text style={style.text}>{category.title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        width: '50%',
        height: 130,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20
    }
})