import { Pressable, StyleSheet, Text, View } from "react-native";


export default function CategoryItem({ navigation, category }) {
    const onClick = (id) => {
        navigation.navigate('Meals')
    }

    return (
        <Pressable style={[style.container, {
            backgroundColor: category.color
        }]} onPress={() => {
            navigation.navigate('Meals', {id: category.id})
        }

        }>
            <Text style={style.text}>{category.title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 15,
        width: '40%',
        height: 120,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20
    }
})