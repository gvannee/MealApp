import { StyleSheet, Platform } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
            ...Platform.select({
                ios: {
                    paddingTop: 20,
                },
                android: {
                    paddingTop: 30,
                },
            }),
      },
})