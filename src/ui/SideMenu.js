import React from 'react';
import { View, Switch,Text } from 'react-native';
import {Avatar, Drawer,Title,Caption, TouchableRipple} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign ,Entypo,SimpleLineIcons,FontAwesome } from '@expo/vector-icons';


const SideMenu = (props) => {

    const [DarkTheme, setDarkTheme] = React.useState(false);

    const toggleTheme = () =>{
        setDarkTheme (!DarkTheme);
    }

    return ( <>
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
           <View>
               {/* <View style={{flexDirection:"row", marginTop:15}}> */}
              

               <View style={{flexDirection:"column", marginLeft:15}}>
                 <Title style={{fontWeight:"bold", fontSize:26}}>Angular Minds</Title>
                 <Caption style={{fontSize:16}}>sejal@angularminds.com</Caption>
               {/* </View> */}
               </View>
               </View>

               <Drawer.Section>
                   <DrawerItem 
                   icon= { ()=> (<AntDesign name="home" size={24} color="black" />)}
                   label="Home"
                   onPress = {()=>{props.navigation.navigate('Home')}}
                   />

                 <DrawerItem 
                   icon= { ()=> (<AntDesign name="user" size={24} color="black" />)}
                   label="Profile"
                   onPress = {()=>{props.navigation.navigate('Profile')}}
                   />

                <DrawerItem 
                   icon= { ()=> (<Entypo name="vk-with-circle" size={24} color="black" />)}
                   label="Categories"
                   onPress = {()=>{props.navigation.navigate('Categories')}}
                   />

                
                  <DrawerItem 
                   icon= { ()=> (<SimpleLineIcons name="faqs" size={24} color="black" />)}
                   label="FAQ's"
                   onPress = {()=>{props.navigation.navigate('Setting')}}
                   />
               </Drawer.Section>
               <Drawer.Section title="Choose Preference">
                   <TouchableRipple onPress={()=>{toggleTheme()}}>
                       <View>
                           <Text>Dark Theme</Text>
                           <View pointerEvents="auto">
                               <Switch value={DarkTheme}/>
                           </View>
                       </View>
                       </TouchableRipple> 

               </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section>
            <DrawerItem icon ={()=>(<FontAwesome name="sign-out" size={24} color="black" />)}
            label="Sign Out"
            // onPress={()=>signOut()}}
            />
        </Drawer.Section>
    </View>
    
    </> );
}
 
export default SideMenu;