return (
    
    <View style={{width:'100%'}}>
      <View>
      <Appbar/>
      </View>
      { isLoading? (<View style={styles.loader}><ActivityIndicator size="large" color="blue"/></View>):(
        <View>
          
            
      <View style={styles.contaier}>
      
        <Text style={{color:'#000',fontSize:20,marginTop:20}}>NAME:-{fname} {lname}</Text>
        <Text style={{color:'#000',fontSize:20,marginTop:20}}>EMAIL:-{amail}</Text>
        <Text style={{color:'#000',fontSize:20,marginTop:20}}>DOB:-{dob}</Text>
      </View>   
      <View style={{width:'100%',backgroundColor:'#ffd60a',height:'22%',justifyContent:'center'}}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Home")}>
               <Text style={{ color: '#ffffff', fontSize: 22, }}>Log out</Text>
            </TouchableOpacity>
      </View>
       
      </View>
      )}
    </View>
  


  )
}

export default result

const styles = StyleSheet.create({
  contaier:{
    height:'75%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffd60a',
  },
  loader:{
 minHeight:"100%",
 display:'flex',
 justifyContent:'center',
 alignItems:'center'

  },
  btn:{
    alignSelf:'center',
    fontFamily:'sans-serif-thin',
    backgroundColor:'#4175fc',
    width:'70%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50
  }
})