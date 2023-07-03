# React Native - The Complete Guide

## React Native Navigation with React Navigation

- Navigating between screens
- What is Navigation ?
- Using Stack Navigation
- Drawers and Tabs

## What is Navigation ?

Move between different screens.
When we think about navigation in the web, we enter a URL to land on a page and then we use Links to land on different sub-pages. In mobile, its tapping buttons and going from one screen to another.


#### REACT NAVIGATION - Routing and Navigation for Expo and React Native Apps.

https://reactnavigation.org/

```
npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

expo install @react-navigation/native-stack 

```

It is a component-based library. So, it gives bunch of components.
Usage - 

```
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
```

When setting up a Navigator (like <Stack.Navigator>) and registering its screens (via <Stack.Screen>), you can decide which screen will be shown as a default when the app starts.

Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen.

i.e. - in the following example, the AllProducts screen would be shown as an initial screen when the app starts:

```
<Stack.Navigator>
  <Stack.Screen name="AllProducts" component={AllProducts} /> // initial screen
  <Stack.Screen name="ProductDetails" component={ProductDetails} />
</Stack.Navigator>
```

You can therefore change the initial screen by changing the <Stack.Screen> order. Alternatively, there also is an initialRouteName prop that can be set on the navigator component (i.e., on <Stack.Navigator> in this case):

```
<Stack.Navigator initialRouteName="ProductDetails">
  <Stack.Screen name="AllProducts" component={AllProducts} /> 
  <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
</Stack.Navigator>
```

```
<!-- You can pass it as a prop -->
const CategoriesScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('MealsOverview')
  };
}

<!-- OR -->

import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
```

We are using the React navigation native stack navigator here. If you take a look at the official docs;  and there at the API reference and the available navigators,  you see that besides this native stack which we are using,  there also is just a stack. In general, these two navigators work the same way  and give you the same kind of navigation.  So this stack-based navigation where you push  another page on top of the screen, and you can then go back to the previous page,  to the previous screen.  But there is an important difference. Native stack, which we are using,  uses native platform elements  for this animation  and for these screens. Therefore it can be more performant than stack which emulates the native behaviors. That's why native stack should probably be your preference and why we are using it here in the course, but if you are facing any kinds of problems  with native stack, you could fall back to stack  which also gives you this stack-based navigation.

#### Working with Route params to pass data between screens

```

navigation.navigate('MealsOverview', {
  categoryId: itemData.item.id
})


const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  return (
    <View style={styles.mealsContainer}>
      <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
  )
};

<!-- OR -->

import { useRoute } from '@react-navigation/native';

const route = useRoute();
const { categoryId } = route.params;

```