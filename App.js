import React from 'react'
import {View,Text,Image} from 'react-native'


const App=()=>{
  return(
  <View >
      <Image
        style={{width: '100%',height:150}}
        source={{uri:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}}
        />
      <Image
        style={{width:'100%',height:350}}
        source={{uri: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}} />
  </View>
  )
  }  
export default App