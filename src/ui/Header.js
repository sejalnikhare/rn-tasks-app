import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image,Text,StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 



const Header = ({props}) => (
    <Appbar.Header style={{backgroundColor:'white',marginTop:22}}>

      <Entypo name="menu" size={29} color="black" style={{marginLeft:10}}     
       onPress={()=>navigation.navigate.openDrawer('SideMenu')}/>
         

              <Text style={{fontSize:20, fontFamily:'Roboto', fontWeight:'bold'}}> TaskList </Text>

        <Entypo name="add-to-list"
         size={24} 
         color="black" 
         style={{marginLeft:170}}
         onPress={()=> {
          props.navigation.navigate('')
         }

         }/>
    </Appbar.Header>
);

const Styles = StyleSheet.create({
  Title:{
    fontSize:30,
    fontStyle:'italic'
  },
})


export default Header;