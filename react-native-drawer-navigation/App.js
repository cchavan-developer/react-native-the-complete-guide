import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName="User"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "#3C0A6B" },
    //       headerTintColor: "#FFF",
    //       // drawerStyle: {
    //       //   backgroundColor: "#ccc",
    //       // },
    //       drawerActiveBackground: "#f0e1ff",
    //       drawerActiveTintColor: "#3C0A6B",
    //     }}
    //   >
    //     <Drawer.Screen
    //       name="User"
    //       component={UserScreen}
    //       options={{
    //         drawerLabel: "User Screen",
    //         drawerIcon: ({ color, size }) => (
    //           <Ionicons name="person" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="Welcome"
    //       component={WelcomeScreen}
    //       options={{
    //         drawerIcon: ({ color, size }) => (
    //           <Ionicons name="home" color={color} size={size} />
    //         ),
    //       }}
    //     ></Drawer.Screen>
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#3c0a6b"
      }}>
        <Tab.Screen name="User" component={UserScreen} options={{
          tabBarIcon: ({focused, color, size}) => (<Ionicons name="person" color={color} size={size} />)
        }} />
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{
          tabBarIcon: ({focused, color, size}) => (<Ionicons name="home" color={color} size={size} />)
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
