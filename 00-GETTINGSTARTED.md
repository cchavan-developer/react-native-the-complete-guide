# React Native - The Complete Guide

## Getting Started


### What is React Native ?
- **React JS + React Native = Real Native Mobile Applications (iOS / Android)**

- React JS is a Javascript library used for building **User Interfaces**. Typically used for Web development. React JS as a library is platform agnostic. It is independent of the underlying platform. React gives you tool for managing state, building virtual component trees.

- React DOM is the library that adds web-support.

- React Native is alternative to react DOM. It ships in with built-in components, which are then compiled to native UI elements for iOS and android platforms. React Native takes care of the compilation steps (from built-in components to the native UI elements under the hood). It also exposes certain native platform API such as device camera.

### Glance under the hood of react native ?

- React Native maps (and compiles reusable components) to respective platform equivalents 

```
const App = props => {
    return (
        <View>
            <Text>Hello There!</Text>
        </View>
    )
};
```

![Component Compilation Diagram](/assets/readme-assets/component-compilation.png)

- The Views/JSX elements are compiled to their native equivalent.
- The Javascript code/logic is **NOT compiled**. It runs on the JS thread that is hosted by react native in the native application that was build. React Native spins up a simple JS process as part of native app. It also manages the process for you and allows this process to talk to the underlying native platform.

![React Native Compilation Diagram](/assets/readme-assets/react-native-logic.png)

### Creating React Native Projects (Expo CLI Vs React Native CLI Command Line Interface)

Official Website for reference - https://reactnative.dev/

- Both tools help you create native projects, run apps on simulators as well as build apps so that you can distribute on the app store.

![Expo CLI Vs React Native CLI](/assets/readme-assets/expo-native-cli.png)

### Creating new react native project

Official Website for expo - https://expo.dev/

Pre-requisites - NodeJS

```
npm i -g expo-cli

expo init my-project

blank               a minimal app as clean as an empty canvas
blank (TypeScript)  same as blank but with TypeScript configuration
tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript

- cd react-native-basics
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios
- yarn web

```

### Folder Structure

```

.expo - 
    - "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
    - "settings.json": contains the server configuration that is used to serve the application manifest.

assets - 
    store images, icon of the application

node_modules - 
    all the 3rd party packages used under the hood

package.json - 
    lists all the dependencies and dev-dependencies of the project along with the scripts commands

babel-config.js - 
    hot the code is transpiled under the hood

app.json -
    configure settings and behavior of the application. File picked up by the expo when app is build for preview

App.js -
    entry point of the application where the actual jsx code lies

```

### How to preview our app ?

In order to run your application on the actual device. Go to App store and download Expo Go App. 
Open the application and preview the app running on your local by scanning the QR code generated after running the following command n your expo project

```
yarn start
```

#### Simulators

- Android Studio 
    - Install and open android studio
    - More Actions
    - VDM (Virtual Device Manager)
    - Create Device
    - Choose a device definition such that a preset has an icon in the play store column

- Xcode
    - Install and open Xcode
    - Open Developer Tool
    - Simulator