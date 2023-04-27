import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustumButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style= {styles.text}>Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#285A84',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        
    },
    
    text:{
        fontWeight: 'bold',
        color: 'white',
    },

});
export default CustumButton