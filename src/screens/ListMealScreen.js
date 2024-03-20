import { Text, View } from "react-native";


export default function ListMealScreen ({route}) {
    const {title} = route.params
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}