import React from 'react';
import {View} from 'react-native';
import { AntDesign ,MaterialIcons, FontAwesome, Fontisto} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Schedule from './Schedule';
import Task from './Task';
import Interview from './Interview';
import Home from '../DrawerTabs/Home';
import EditTask from '../../compo/EditTask';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import FAQs from '../DrawerTabs/Setting';
// import createHomeStack from '../StackTab/createHomeStack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


class CreateTabScreen extends React.Component {

render(){

  return (<>
  <NativeBaseProvider>
   <Tab.Navigator
  activeColor="#fff"
  barStyle={{ backgroundColor: 'green' }}
>

<Tab.Screen
    name="Home"
    component={createHomeStack}
    options={{
      headerShown: false,
      tabBarLabel: 'Home',
      tabBarColor: '#4169e1',
      tabBarIcon: ({ color }) => (
        <AntDesign name="home" size={24} color={'red'} />
      ),
    }}
  />

  

<Tab.Screen
    name="Schedule"
    component={Schedule}
    options={{
      headerShown: true,
      tabBarLabel: 'Schedule',
      tabBarColor: '#ffd700',
      tabBarIcon: ({ color }) => (
        <MaterialIcons name="schedule" size={24} color="black" />

        ),
    }}
  />

<Tab.Screen
    name="Task"
    component={Task}
    options={{
      headerShown: true,
      tabBarLabel: 'Complete Task',
      tabBarColor: '#e0ffff',
      tabBarIcon: ({ color }) => (
        <FontAwesome name="tasks" size={24} color="black" />     ),
    }}
  />

<Tab.Screen
    name="Interview"
    component={Interview}
    options={{
      headerShown: true,
      tabBarLabel: 'UnComplete Task',
      tabBarColor: '#0000cd',
      tabBarIcon: ({ color }) => (
<Fontisto name="question" size={24} color="green" />
        ),
    }}
  />


</Tab.Navigator>
  </NativeBaseProvider>
  </>)
}



}
// const CreateTabScreen =()=>(

 

// );

export default CreateTabScreen;



createHomeStack = () => 
        <Stack.Navigator>
             <Stack.Screen name="Home" component= {Home} options={{
              headerShown:false
             }}/>
             <Stack.Screen
                name="EditTask"
                component={EditTask}
                options={{ headerShown: true }}
              />
          </Stack.Navigator>
















