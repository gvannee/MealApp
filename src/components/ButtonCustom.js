import { StyleSheet, Text } from "react-native"


export default function ButtonCustom({title}) {

    return (
        <Text style={style.text}>{title}</Text>
    )
}

const style = StyleSheet.create({
    text: {
        backgroundColor: '#66D678',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        fontSize: 12
    }
})