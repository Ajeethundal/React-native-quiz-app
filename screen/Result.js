import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({navigation,route}) => {
  const {score} = route.params
  const resultbanner= score>40? "https://cdni.iconscout.com/illustration/premium/thumb/business-victory-3142051-2617865.png":"https://cdni.iconscout.com/illustration/premium/thumb/businessman-giving-up-5524251-4609585.png"
  // const TexBob = ()=>{
  //   if(score>40){
  //     return hello
  //   }
  //   else{
  //     return nope
  //   }
  // }
  return (
    <View style={styles.maincontainer}>
    <View style={styles.container}>
      <Text style={styles.tils}>Result</Text>
      
    </View>
    <Text style={styles.scoretxt}>YOUR SCORE={score}</Text>
    <View style={styles.bannercontainer}>
      {/* <Image
          style={styles.banner}
          source={require('/React native/ajeet/images/banner1.png')}
          resizeMode='contain'
        /> */}
        <Image 
        source={{
          uri:resultbanner,
          
        }}
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
       <View>
       {score>40 && <Text style={{fontSize:35,fontWeight:'900',color:'green',}}>Congratulations You <Text style> Deserve it</Text></Text>}
       {score<=40 && <Text style={{fontSize:35,fontWeight:'900',color:'green'}}>Better Luck Next Time</Text>}
      </View> 
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
            <Text style={styles.btntxt}>Home</Text>
        </TouchableOpacity>
      

    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  maincontainer:{
   
   alignItems:'center',
   
   width:'100%',
  }, 
  banner:
    {
        height:400,
        width:400
    },
    bannercontainer:{
        justifyContent:'center',
        alignItems:'center',

    },
    button:{
      width:'90%',
      backgroundColor:'#1565c0',
      height:60,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:16, 
    marginTop:100,
      
    },
    btntxt:{
      fontSize:22,
      fontWeight:'600',
      color:'#ffffff',

    },
    tils:{
      fontSize:36,     
      fontWeight:'600',
      color:'white',
  },
  container:{
      width:'100%',
      paddingVertical:10,
      alignItems:'center',
      backgroundColor:'#1565c0',
  },
  land:{
      color:'white',
  },
  scoretxt:{
    fontSize:28,
    fontWeight:'800',
    color:'#000000',
    marginTop:30,

  }
})