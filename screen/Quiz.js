import { StyleSheet, Text, TouchableOpacity, View,Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'

import {AppBar} from '@react-native-material/core';
import Titel from '../cmponent/Titel';


const  shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
const Quiz = ({navigation}) => {
  const [question, setQuetion]= useState();
  const [ques,setQues]=useState(0)
  const [options,setOptions]=useState([])
  const [score,setScore]=useState(0)
  const [isLoading,setisLoading]=useState(false)
  const [count,setCount]=useState(1)
  const [timer,setTimer]=useState(0)
  

  const getQuiz = async ()=> {
    setisLoading(true)
    const url='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuetion(data.results);
    setOptions(genrateOptionandshuffle(data.results[0]));
    setisLoading(false)
  };
  useEffect(()=>{
    getQuiz();
  }, []);

  const HandaleNextPress=()=>{
    setQues(ques+1);
    setOptions(genrateOptionandshuffle(question[ques+1]))
    
  }
    
    const handaleselectedopstion=(_option)=>{
      if(count<=10){
      setCount(count+1)
      fixit =1
      var corect=decodeURIComponent(question[ques].correct_answer);
      if(_option===question[ques].correct_answer){
      setScore(score+10)
      ToastAndroid.show('CORRECT:ANSWER',
      ToastAndroid.SHORT)
      
     }
     else{
      ToastAndroid.show(corect,
      ToastAndroid.SHORT)
     }
      
      
     if(ques!==9){
     setQues(ques+1);
     setOptions(genrateOptionandshuffle(question[ques+1]))
    }
    if(count===10){
      handaleShowRsult()
    }
    }
    return 0;
  
  }
  const settime =1;
  const timreadd=()=>{
    
    for (var index = 0; index<1; index++) {
    
      if(timer===11){
        setTimer(timer-10)
        setCount(count+1)
        if(count===10){
          handaleShowRsult();
        }
       if(count<10){
          HandaleNextPress()
          
          break;
          
        }
      
      }
      setTimeout(() => {
      
        
        setTimer(timer+1)
        
        
           
      
    }, 1000)
    return timer
  
  
  
    
    
      
     
      
    
  
    
  }

  }



const handaleShowRsult=()=>{
  navigation.navigate("Result",{score:score})
}


  const genrateOptionandshuffle=(_question)=>{
      
     const options=[..._question.incorrect_answers]
     options.push(_question.correct_answer)
    
    shuffleArray(options)
    
    return options
  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.titel}>
      <Titel/>
      </View>
        
        {/* <Titel/> */}
   {isLoading? <View style={{display:'flex',margin:0,justifyContent:'center',alignItems:'center',backgroundColor:'#94C9A9',width:'100%',height:'92%',}}>
    <Text style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#000000',fontSize:30,}}>LOADING...</Text>
   </View> :question &&( 
    <View style={styles.ouescontainer}> 
    <View style={{backgroundColor:'#1565d0'}}>
      {/* // progress bar  */}
      {count===1 && <View style={{width:'10%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===2 && <View style={{width:'20%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===3 && <View style={{width:'30%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===4 && <View style={{width:'40%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===5 && <View style={{width:'50%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===6 && <View style={{width:'60%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===7 && <View style={{width:'70%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===8 && <View style={{width:'80%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===9 && <View style={{width:'90%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}
      {count===10 && <View style={{width:'100%',backgroundColor:"green",borderBottomRightRadius:10,borderTopRightRadius:10,}}>
      <Text style={{color:'green'}}>hello</Text> 
      </View>}

    {/* // end of progress bar */}
    </View>
    <Text style={{color:'#000000',fontSize:28,backgroundColor:'#1565d0'}}> :-{timreadd()}</Text>
     <View style={styles.questioncon}>
      
        <Text style={styles.questiontxt}>Q {count}. {decodeURIComponent( question[ques].question)}</Text>
     
      </View>
    <View style={styles.options}>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handaleselectedopstion(options[0])}>
        <Text style={styles.optiontxt}>{decodeURIComponent( options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handaleselectedopstion(options[1])}>
        <Text style={styles.optiontxt}>{decodeURIComponent( options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handaleselectedopstion(options[2])}>
        <Text style={styles.optiontxt}>{decodeURIComponent( options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbtn} onPress={()=>handaleselectedopstion(options[3])}>
        <Text style={styles.optiontxt}>{decodeURIComponent( options[3])}</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.btncontainer}>
    {ques!==9 && <TouchableOpacity style={styles.button}  onPress={HandaleNextPress}>
            <Text style={styles.btntxt}>SKIP</Text>
        </TouchableOpacity >}
        
       {/* {ques!==9 && <TouchableOpacity style={styles.button} onPress={HandaleNextPress}>
            <Text style={styles.btntxt}>NEXT</Text>
        </TouchableOpacity>} */}
        
        {ques===9 && <TouchableOpacity style={styles.sbutton} onPress={()=>navigation.navigate("Result",{score:score})}>
            <Text style={styles.btntxt}>SHOW RESULT</Text>
        </TouchableOpacity>}
    </View>
    </View>
      )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
        
        
    },
    titel:{
      
      width:'100%',
    },
    ouescontainer:{
      flex:1,
    },
    questioncon:{
        
        width:'100%',
        minWidth:'100%',
        
        height:200,
        backgroundColor:'#1565d0',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        
        
        
    },
    options:{
        marginVertical:20,
        padding:12,
        flex:1,
        
        
        
    },
    btncontainer:{
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row',
        padding:12,
        marginTop:230,
        
    },
    button:{
       width:100,
        backgroundColor:'#1565c0',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:26, 
        marginBottom:20,
        
      },
      btntxt:{
        fontSize:22,
        fontWeight:'600',
        color:'#ffffff',
  
      },
      questiontxt:{
        fontSize:28,
        color:'#000000',
        padding:10,
        

      },
      options:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginTop:150,
        
        
      },
      optionbtn:{
        width:'100%',
        backgroundColor:'#2c7da0',
        height:55,
        marginHorizontal:5,
        marginVertical:8,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
      },
      optiontxt:{
        fontSize:21,
        color:'#ffffff',
      },
      sbutton:{
        width:170,
        backgroundColor:'#1565c0',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:26, 
        marginBottom:20,
      }
})