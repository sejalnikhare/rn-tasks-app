import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import Profile from '../pages/DrawerTabs/Profile';
import Categories from '../pages/DrawerTabs/Categories';
import FAQs from '../pages/DrawerTabs/Setting';
import CreateTabScreen from '../pages/BottomTab/CreateTabScreen';
import SideMenu from '../ui/SideMenu';
import Home from '../pages/DrawerTabs/Home';
import Header from '../ui/Header';
import { useSelector } from 'react-redux';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


class Navigatorr extends React.Component {
 
    render() {

          
          return (<>
        
      {/* <Header/> */}
       <Drawer.Navigator  drawerContent={ props => <SideMenu {...props}/>}>     
       <Drawer.Screen name='Angular Minds'
       component={CreateTabScreen} 
       size={50}
       options={{headerShown: true}}
       />
       <Drawer.Screen name='Profile' component={Profile}/>
       <Drawer.Screen name='Categories' component={Categories}/>
       <Drawer.Screen name='Setting' component={FAQs}/>
       </Drawer.Navigator>
        </>  );
    }
}

const Style = StyleSheet.create({
    container:{
      flex:1
    },

    head:{
      fontSize:30,
      fontWeight:'bold',
    },
  })
   
 
export default Navigatorr;