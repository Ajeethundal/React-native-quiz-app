import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tils}>Quiz<Text style={styles.land}>-Land</Text></Text>
    </View>
  )
}

export default Titel;

const styles = StyleSheet.create({
    tils:{
        fontSize:36,     
        fontWeight:'600',
        color:'black',
    },
    container:{
        width:'100%',
        paddingVertical:10,
        alignItems:'center',
        backgroundColor:'#1565c0',
    },
    land:{
        color:'white',
    }
})