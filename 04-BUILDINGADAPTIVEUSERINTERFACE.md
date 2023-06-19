# React Native - The Complete Guide

## Building Adaptive User Interfaces (Adapt to Platform & Device Sizes)

### Adaptive & Responsive UIs

#### Building  Cross-Platform and Device UIs
- Execute platform specific code
- Adjust to different device sizes

#### Setting Dynamic Widths

You can set dynamic widths to the mobile in percentages (%), minWidth, maxWidth, minHeight, maxHeight so that it accommodates width as per the device width

#### Built in dimensions API

This can be achieved by using **DIMENSIONS API** from the react native library.

```
const dimensionsWidth = Dimensions.get("");

<!-- Usage -->
<!-- padding: deviceWidth < 380 ? 12 : 24, -->

<!-- The values can either by screen / window. For iOS, both are same. For android, screen is the entire available width and height including the status bar whereas window is excluding the status bar -->
```

#### Setting sizes dynamically

Using Dimensions, you cannot rotate mobile phone mid-way. The deviceWidth and deviceHeight will be called only once. Hence, the values will be locked in only for the first time. So, using dimensions won't be a feasible solution.

In order to resolve this issue, react native provides a hook called useWindowDimensions.

```
const { width, height } = useWindowDimensions();
<!-- You can get width or height of the device using the above hook. -->

const marginTopDistance = height < 380 ? 30 : 100;

<!-- Usage :: -->
<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}></View>

```

#### Managing screen content with keyboard avoiding view

If the input field isn't wrapped with KeyboardAvoidingView, then when user tries to add input to the input field, the mobile keyboard comes over the input field and the field is not visible.

In order to resolve this issue, you wrap the contents of the container that you want to scroll up when user tries to edit the field.


If we have different styles for different platforms, we can use the **Platform** react native api

Usage

```
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
```

You can also write platform specific files - 

For instance - Title.android.js
               Title.ios.js


#### StatusBar       