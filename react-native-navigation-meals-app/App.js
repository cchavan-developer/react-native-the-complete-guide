import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#3f2f35" },
        drawerContentStyle: { backgroundColor: "#351401", },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor:"#351401",
        drawerActiveBackgroundColor: "#e4baa1"
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "All Categories", drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} /> }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />}} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#3f2f35" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{title: "About the Meal"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
