import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import ListMealScreen from './src/screens/ListMealScreen';
import MealDetailsScreen from './src/screens/MealDetails';
import FavoriteScreen from './src/screens/FavoriteScreen';
import { Style } from './src/constants/color';
import { useFonts } from '@expo-google-fonts/poppins';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeStackScreen } from './src/navigation/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  // const Stack = createBottomStackNavigator();
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Semibold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf")
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: 'Poppins-Medium',
        },
        headerStyle: {
          backgroundColor: '#66D678',
        },
        headerTitleAlign: 'center'
      }
      }>
        <Stack.Screen component={HomeStackScreen} name='Main' options={{
          headerShown: false
        }}/>
        <Stack.Screen component={ListMealScreen} name='Meals'
          options={{
            
          }} />
        <Stack.Screen name='Details'  component={MealDetailsScreen}
        
          options={
            (({route}) => ({
              title: route.params.name, 
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 18, // Change the font size here
              },
  
            }))
            
          } />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        ...Platform.select({
            ios: {
                paddingTop: 20,
            },
            android: {
                paddingTop: 40,
            },
        }),
  },
});
