# React Native - The Complete Guide

## Diving Deeper into components, layouts and styling - Building a Mini Game App

- Build complete demo apps ("Guess my number" Game)
- Learn new core components
- Complex Layouts and styles

### My Learnings - 

#### How do you add shadow to the android and iOS Apps ?
A property attribute called `elevation` is used to add shadow to android apps. Higher the value, more is the shadow.
The **elevation** property has no effect on the iOS.
To add shadow to the iOS App, we can make use of the following style attributes - shadowColor, shadowOffset, shadowRadius, shadowOpacity.

```
const styles = StyleSheet.create({
  startGameScreenContainer: {
    padding:16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 16, 
    backgroundColor: "#72063C",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
})
```

#### Configure TextInput

Refer the documentation for the TextInput configuration - https://reactnative.dev/docs/textinput

#### Adding Visual Feedback to button

To make it a button, we need to add a component that allows us to react to presses, taps. **Touchable** is the native component that can be used. But nowadays **Pressable** Component is recommended.

#### NOTE** - You will need to work with the combined containers when building button component.

Visual feedback on android can be achieved using **android-ripple** attribute of the Pressable component.

```
<View style={styles.buttonOuterContainer}>
    <Pressable 
      onPress={pressHandler} 
      android_ripple={{ color: "#640233" }} 
      style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  </View>

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75
  }
});
```

#### Adding Linear Gradient

https://docs.expo.dev/versions/latest/sdk/linear-gradient

```
expo install expo-linear-gradient

import { LinearGradient } from 'expo-linear-gradient';

<!-- Linear Gradient Usage -->
<LinearGradient colors={["#4E0329", "#DDB52F"]} style={styles.rootScreenStyle}>
  <StartGameScreen />
</LinearGradient>

```

### Adding Background Overlay Image

Background image can be added by using native **ImageBackground** component

```

<ImageBackground
  source={require("./assets/images/background.png")}
  resizeMode="cover"
  imageStyle={styles.backgroundImage}
  style={styles.rootScreenStyle}
>
  <StartGameScreen />
</ImageBackground>

const styles = StyleSheet.create({
  rootScreenStyle: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  }
});

```

### Adding Alert

Alert is NOT a component that we display instead it is an object that holds a method that we can call to show an alert.
It also has a **prompt** method where we can enter a value.

```
Alert.alert(
  "Invalid Number",
  "Number has to be a number between 1 and 99",
  [
    {
      text: "Okay",
      style: "destructive",
      onPress: resetInputHandler
    }
  ]
);
```

#### Navigating to a screen without external dependencies

Navigating to a screen without external dependencies can be achieved by maintaining an external state in the parent component

#### Safe Area View Component

Modern devices have a notch at the top of the screen. Therefore, we want to add a sufficient distance/spacing to the content so that it doesn't overlap with the notch. Not all devices have such a notch and not the same size.  We need a component to automatically detect the device and add the space inheritently.

```
<LinearGradient
  colors={["#4E0329", "#DDB52F"]}
  style={styles.rootScreenStyle}
>
  <ImageBackground
    source={require("./assets/images/background.png")}
    resizeMode="cover"
    imageStyle={styles.backgroundImage}
    style={styles.rootScreenStyle}
  >
    <SafeAreaView style={styles.rootScreenStyle}>{screen}</SafeAreaView>
  </ImageBackground>
</LinearGradient>
```

#### Implement Style Cascading 

By passing style as props.
Component can have multiple styles in the array format

```
<!-- The styles are parsed from left to right. The right styles have precedence. -->
<View style={[styles.parentContainer, props.style]}></View>

```

#### Icons 

Icons can be implemented via expo very easily.

https://docs.expo.dev/guides/icons/
https://icons.expo.fyi/

```

import { Ionicons } from "@expo/vector-icons";

<Ionicons name="md-remove" size={24} color={Colors.white} />

```

#### Adding Custom Fonts

https://docs.expo.dev/versions/latest/sdk/font/

Install expo-font package using command

expo install expo-font

```

import { useFonts } from "expo-font";

useFonts({
  'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
  'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
});
```

By the time fonts load we can show splash screen of the app which is the app loading screen

expo install expo-app-loading

expo-app-loading is deprecated in favor of expo-splash-screen: use SplashScreen.preventAutoHideAsync() and SplashScreen.hideAsync() instead.