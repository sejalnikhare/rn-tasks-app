import React from 'react';
import {View,TextInput,Dimensions, TouchableOpacity,Text,StyleSheet, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import * as firebase from 'firebase';

const s_height = Dimensions.get('window').height;
const s_width = Dimensions.get('window').width;
// const box_height = width /3;


class Profile extends React.Component {
    state={
        email:"sejal@am.com",
        password:"1234"
    }



    render() { 
        return ( <>
        
        <View style={Styles.main}>
            <View  style={Styles.container}>
                <View style={Styles.icon}>
                    <AntDesign name="user" size={80} color="#000080" />    
                 </View>
                <TextInput style={Styles.input} placeholder={"UserName"} value={this.state.email}
                onChangeText={()=>this.state.email}/>


                <TextInput style={ Styles.input } 
                secureTextEntry={true}
                 placeholder={"Password"}
                 value={this.state.password}
                onChangeText={()=>this.state.password}/>

                <TouchableOpacity onPress={()=>this.userLogin(this.state.email, this.state.password)}
                 style={[Styles.btn]}>
                    <Text style={{color:'#fff',fontWeight:'bold'}}>Sign In</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{marginTop:35}} 
                onPress = {()=>{this.props.navigation.navigate("Registration")}}
                >
                    <Text style={{color:'#fff',fontWeight:'bold'}}>New User? Sign Up Here.</Text>
                </TouchableOpacity>



                <TouchableOpacity style={{marginTop:5}}>
                    <Text style={{color:'#fff'}}>Forget Password.</Text>
                </TouchableOpacity>
      
            </View>

        </View>

        </> );
    }
}

const Styles = StyleSheet.create({
    main:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        height:s_height/1.8 ,
         backgroundColor:'#000',
         borderRadius:10,
          width:s_width/1.1,
          alignItems:'center'
    },
    icon:{
        marginTop:-70  ,
         borderRadius:100, 
         width:150,
          height:150, 
          backgroundColor:'#ccc', 
          alignItems:'center',
          justifyContent:'center',
    },
    input:{
        textAlign:'center',
        marginTop:30, 
        borderRadius:20,
        height:40,
         backgroundColor:'#fff',
         width:(s_width - s_width/5)-50
    },
    btn:{
        marginTop:20,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#fff",
         width:(s_width - s_width/5)-50,
    },
})

 
export default Profile;



  
