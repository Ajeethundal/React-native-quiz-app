import React from 'react';
import {AppBar} from '@react-native-material/core';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {HStack, Banner, Button} from '@react-native-material/core';
import Titel from '../cmponent/Titel';

const Home = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      {/* <AppBar title="Quiz" style={styles.appbart}/> */}
      <Titel/>
      <View style={styles.bannercontainer}>
      <Image
          style={styles.banner}
          source={require('/React native/ajeet/images/banner1.png')}
          resizeMode='contain'
        />
        <Text style={{fontSize:30,fontWeight:'900',color:'green',justifyContent:'center'}}>Unlocking Knowledge at the</Text>
        <Text style={{fontSize:30,fontWeight:'900',color:'green',justifyContent:'center'}}>Speed of Thought</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.btntxt}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
    banner:
    {
        height:400,
        width:400
    },
    bannercontainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,


    },
    appbart:{
      fontSize:30,
    },
    button:{
      width:'90%',
      backgroundColor:'#1565c0',
      height:60,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:16, 
      marginBottom:20,
      
    },
    btntxt:{
      fontSize:22,
      fontWeight:'600',
      color:'#ffffff',

    },
    maincontainer:{
      alignItems:'center',
      
      height:'100%',
    }
});
