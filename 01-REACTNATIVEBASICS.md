# React Native - The Complete Guide

## React Native Basics - The Course Goals App

- Diving into the core concepts
- Using react native components and building UIs
- Styling react native apps
- Add interactivity to our apps

### Exploring core components & component styling

React Native transpiles different elements into different Native elements for android and iOS.

Official Docs - https://reactnative.dev/docs/components-and-apis

### Basic Components - 

- #### **Activity Indicator**
    Displays a circular loading indicator.

- #### **Button**
    A basic button component that should render nicely on any platform. Supports a minimal level of customization.

    If this button doesn't look right for your app, you can build your own button using Pressable. For inspiration, look at the source code for the Button component.

- #### **Flat List**
    A performant interface for rendering basic, flat lists, supporting the most handy features:

    - Fully cross-platform.
    - Optional horizontal mode.
    - Configurable viewability callbacks.
    - Header support.
    - Footer support.
    - Separator support.
    - Pull to Refresh.
    - Scroll loading.
    - ScrollToIndex support.
    - Multiple column support.

- #### **Image**
    A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

- #### **ImageBackground**
    A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the `ImageBackground` component, which has the same props as `Image`, and add whatever children to it you would like to layer on top of it

- #### **KeyboardAvoidingView**
    This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed.

- #### **Modal**
    The Modal component is a basic way to present content above an enclosing view.

- #### **Pressable**
    Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

- #### **RefreshControl**
    This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.

- #### **ScrollView**
    Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

    Keep in mind that ScrollViews must have a bounded height in order to work

- #### **SectionList**
    A performant interface for rendering sectioned lists, supporting the most handy features:

    - Fully cross-platform.
    - Configurable viewability callbacks.
    - List header support.
    - List footer support.
    - Item separator support.
    - Section header support.
    - Section separator support.
    - Heterogeneous data and item rendering support.
    - Pull to Refresh.
    - Scroll loading.

- #### **StatusBar**
    Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.

- #### **Switch**
    Renders a boolean input.

- #### **Text**
    A React component for displaying text. Text supports nesting, styling, and touch handling.

- #### **TextInput**
    A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

- #### **TouchableHighlight**
    A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.

- #### **TouchableOpacity**
    A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

- #### **TouchableWithoutFeedback**
    Do not use unless you have a very good reason. All elements that respond to press should have a visual feedback when touched.

- #### **View**
    The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
    
    View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, div, android.view, etc.

- #### **VirtualizedList**
    Base implementation for the more convenient `FlatList` and `SectionList` components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList provides, e.g. for use with immutable data instead of plain arrays.


- #### **`ScrollView` vs `FlatList` - which one to use?**

    ScrollView renders all its react child components at once, but this has a performance downside.

    Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.

    This is where FlatList comes into play. FlatList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

    FlatList is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.


We work with these core components that are provided by the react native. We can combine them in our react code to build our own components and UI.

### Styling React Native Components - 

**There is NO CSS!**

- Inline styles - These can be passed in as props
- Stylesheet Object - Written in JS code. Based on the CSS syntax, but only a subset of the properties & features is supported. Separation of concerns !

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
````

In order to make the container/view pressable, you have to wrap the View with the native component **Pressable**

### React JS Notes -
When you need to pass arguments to the function which is passed as props to the component.
Following is the syntax - 

```
onPress = { props.function.bind(this, argument1) }
```

#### NOTE** - You can add default **android ripple** effect and/or an iOS alternative to identify the press state of the item
Android ripple doesn't have any effect on iOS. The ripple effect on the iOS can be handled using **style attribute**

```
     <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, itemData.id)}
        style={({pressed}) => (pressed ? styles.pressedItem: '')}
      >
        <Text style={styles.goalText}>{itemData.text}</Text>
      </Pressable>
```

#### NOTE** - A pop-up can be shown using a native **Modal** component. 
Use the built in attributes to show/hide visibility and define animation type - 

```
    <Modal
      animationType="slide"
      visible={visible}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
    </Modal>
```

#### NOTE** - An image can be added by using a native **Image** component. 

```
    <!-- Source should relative path to the required image -->
    <Image 
        source={require("../assets/images/goal.png")} 
        style={styles.image}
    />
```

#### NOTE** - In an app.json file created using expo, you can add background color configuration

#### NOTE** - You can add style / theme to the statusbar using StatusBar component provided by expo-status-bar

```
    import { StatusBar } from "expo-status-bar";

    <StatusBar style="light" />s
```