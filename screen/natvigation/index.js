
import { createStackNavigator } from '@react-navigation/stack';
import home from '../Home';
import Quiz from '../Quiz';
import Result from '../Result';
import {react, useEffect} from 'react'
const Stack = createStackNavigator();



function MyStack() {


  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={home} options={{headerShown:false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
     
    </Stack.Navigator>
  );
}
export default MyStack;