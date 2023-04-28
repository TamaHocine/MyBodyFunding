import {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustumButton from '../../components/CustomButton/CustumButton';


const SignInScreen = () => {

  const onSignInPressedF = () =>{
    console.warn('Connexion Facebook');
  };

  const onSignInPressedG = () =>{
    console.warn('Connexion Google');
  };

  const onSignInPressedE = () =>{
    console.warn('Connexion Email');
  };

  return (
    <View>

      <CustumButton text="Connexion Facebook" onPress={onSignInPressedF}></CustumButton>
      <CustumButton text="Connexion Google" onPress={onSignInPressedG}></CustumButton>
      <CustumButton text="Connexion E-mail" onPress={onSignInPressedE}></CustumButton>

      <Text>Vous n'avez pas encore de compte, créer un ?</Text>
      <Text>En créant un compte, vous accepter nos conditions d'utilisation,
        notrepolitique de confidentialité et notre politique en matière de cookies.
        Ces deux dernières politiques décrivent comment nous utilisons vos données
        pour proposer, améliorer et faire la promotion de nos services et notresite, 
        ainsi que les droits dont vous disposez pour contrôler cette utilisation et
        comment les exercer.
      </Text>
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