import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HomeStackScreen = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name='Category Meal' component={MainScreen} options={{
                
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'Poppins-Medium'
                },
                tabBarActiveBackgroundColor: '#08F82E',
                tabBarInactiveBackgroundColor: '#66D678',
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name='home' color='white' size={30} />
                ),
                
            }} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
                tabBarActiveBackgroundColor: '#08F82E',
                tabBarInactiveBackgroundColor: '#66D678',
                tabBarShowLabel: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'Poppins-Medium'
                },
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name='heart' color='white' size={30} />
                )
            }} />
        </Tab.Navigator>
    )
}