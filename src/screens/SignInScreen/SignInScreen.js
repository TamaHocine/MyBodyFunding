import {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustumButton from '../../components/CustomButton/CustumButton';


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () =>{
    console.warn('Sign in');
  };

  const onForgotPasswordPressed = () =>{
    console.warn('OnForgotPasswordPressed');
  };




  return (
    <View>
      <CustomInput 
      placeholder="Email" 
      value={username} 
      setValue={setUsername}>
      </CustomInput>

      <CustomInput 
      placeholder="Mot de passe" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
      >
      
      </CustomInput>

      <CustumButton text="Connexion" onPress={onSignInPressed}></CustumButton>
      <CustumButton 
      text="Mot de passe oublié ?" 
      onPress={onForgotPasswordPressed} 
      type= "TERTIARY"
      >

      </CustumButton>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    
  },
})

export default SignInScreen