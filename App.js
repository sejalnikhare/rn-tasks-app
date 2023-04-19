import { AppRegistry, Platform } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigatorr from './src/navigation/Navigatorr';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';
const App = () => {
  return ( <SafeAreaProvider>
          <Provider store= {store}>
          <View style={Style.container}>
          <NavigationContainer>
                  <Navigatorr/>
            </NavigationContainer>
          </View>
          </Provider>
  </SafeAreaProvider> );
}

const Style = StyleSheet.create({
  container:{
    flex:1
  }
})
export default App;



 
 





























// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/FrontEnd/Home/Home';
// import Login from './src/FrontEnd/Login/Login';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (

//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" 
//         component={Home}
//         option={{title:"Task List"}}/>

//        <Stack.Screen name="Login" 
//        component={Login}
//         option={{title:"Login"}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
