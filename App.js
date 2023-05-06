import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState } from 'react';
// import {AppLoading} from 'expo';
import AppLoading from 'expo-app-loading';
import Color from './screens/constants/Color';

export default function App() {

  // const fetchFonts=()=>{
  //   return Font.loadAsync({
  //     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf')
  //     // 'open-sans':require('./assets/fonts/')
  //   })
  // }

  // const [dataLoaded,setDataLoaded]=useState(false)

  // if(!dataLoaded){
  //   return <AppLoading
  //   startAsync={fetchFonts}
  //   onFinish={()=>setDataLoaded(true)}
  //   onError={err=>console.log(err)}
    
    
    
  //   />
  // }
const [userNumber,setuserNumber]=useState('')
const [guessRounds,setguessRounds]=useState(0)

const StarGametHandler=(selectedNumber)=>{
  setuserNumber(selectedNumber)
}

const gameOverHandler=(NumberOfRounds)=>{
  setguessRounds(NumberOfRounds)
}
const restartHandler=()=>{
  setuserNumber(null)
  setguessRounds(0)
}

let content=<StartGameScreen onStartGame={StarGametHandler}/>

if(userNumber && guessRounds<=0){
  content=<GameScreen userChoice={userNumber} GameOver={gameOverHandler}/>
}else if(userNumber && guessRounds){
  content=<GameOverScreen NumberOfRounds={guessRounds} userNumber={userNumber} onRestart={restartHandler}/>
}
  return (
    <>
    <View style={styles.container}>
   {/* <StartGameScreen/> */}
   {/* <GameScreen/> */}
   {/* <GameOverScreen/> */}
   {content}
   </View>
   
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    backgroundColor:"pink",
    color:"red"
    
    
  }
   
});
