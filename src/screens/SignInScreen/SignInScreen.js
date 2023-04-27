import {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustumButton from '../../components/CustomButton/CustumButton';


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  return (
    <View>
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}>
      </CustomInput>

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}>
      secureTextEntry
      </CustomInput>

      <CustumButton>
        
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