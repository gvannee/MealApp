import { Pressable, StyleSheet, Text } from "react-native";

export default function MenuButton({onClick, value}) {

    return (
        <Pressable onPress={onClick} style={({pressed}) => [
            {
              backgroundColor: pressed ? '#078040' : 'white',
            },
            style.pressIn,
          ]}>
            <Text>{value}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    pressIn: {
        backgroundColor: '#078040'
    }
})