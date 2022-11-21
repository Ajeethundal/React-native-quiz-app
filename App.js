import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'


// import React from 'react'
import Home from './screen/Home'
import Quiz from './screen/Quiz'
import Result from './screen/Result'
import * as React from 'react';
import MyStack from './screen/natvigation'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})