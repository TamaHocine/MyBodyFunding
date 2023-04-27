/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ImageBackground, View, StyleSheet, Text, Button} from 'react-native'
import React from 'react'
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import { Image } from 'react-native-svg';

const App = () => {
  return (
    <View style={styles.container}>
    {/*<ImageBackground source={require('./assets/images/Fond.png')} resizeMode="cover" style={styles.image}>
  </ImageBackground>*/}
  <SignInScreen></SignInScreen>
  </View>
  
  );

} ; 
const styles = StyleSheet.create({

  root: {
    flex: 1,

  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default App;

