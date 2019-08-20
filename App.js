/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react"

import Home from "./src/Home"
import Article from "./src/Article"
import { createAppContainer, createStackNavigator } from "react-navigation"

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Article: {
      screen: Article,
      path: "article/:id"
    }
  },
  { initialRouteName: "Home" }
)

const prefix = Platform.OS === "android" ? "myapp://myapp/" : "myapp://"

const App = createAppContainer(AppNavigator)

const MainApp = () => <App uriPrefix={prefix} />

export default MainApp
