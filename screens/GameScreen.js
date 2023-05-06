import { View, Text,StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState,useRef, useEffect } from 'react'
import NumberContainer from './components/NumberContainer'
import BodyText from './components/BodyText'
import Card from './components/Card'
import MainButton from './components/MainButton'
import {Ionicons} from '@expo/vector-icons'



const renderItem=(value,numOfRounds)=>{
     return (
        <View style={styles.listItems}>
    <BodyText>
        #{numOfRounds}
    </BodyText>
    <BodyText>
        {value } 
    </BodyText>
</View>
    )
}

const generateRandomBetWeen=(min,max,exclude) =>{
  min=Math.ceil(min);  
  max=Math.floor(max);
const rndNum=Math.floor(Math.random()*(max-min))+min
if(rndNum===exclude){
    return generateRandomBetWeen(min,max,exclude)
}
else{
    return rndNum
}
}



 
const GameScreen = (props) => {
    const initalGuess= generateRandomBetWeen(1,99,props.userChoice)
    const [currentGuess,setCurrentGuess]=useState(initalGuess)
    const [pastGuess, setPastGuess]=useState([initalGuess])
     const currentLow=useRef(1)
     const currentHigh=useRef(100)
     const {userChoice,onGameOver}=props

useEffect(()=>{
    if(currentGuess== props.userChoice){
        onGameOver(pastGuess.length)
    }
},[userChoice,currentGuess,onGameOver ])


const nextGameHandler=direction=>{
    if((direction==='lower' && currentGuess<props.userChoice)|| (direction==='higher' && currentGuess>props.userChoice)) {
    
    
    Alert.alert("Dont lie","you know that is wrong...",[{text:"sorry!",style:"cancel"}])
    return;
}
if(direction==='lower'){
    currentHigh.current=currentGuess 
}
if(direction==='higher'){
    currentLow.current=currentGuess+1 
}
const nextNumber=generateRandomBetWeen(currentLow.current,currentHigh.current,currentGuess) 
setCurrentGuess(nextNumber)
setPastGuess(currentPassGuess=>[nextNumber,...currentPassGuess])
}


    return (
        <View style={styles.screen}>

            <BodyText>
              Opponent's Guess
            </BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
<Card style={styles.btncontainer  }>
    <MainButton onPress={()=>nextGameHandler('lower')}>
    <Ionicons name="md-remove" size={24} color="white"/> 
    </MainButton>
    <MainButton onPress={()=>nextGameHandler('higher')}>
    <Ionicons name="add" size={24} color="white"/> 
    </MainButton>
</Card>
<View style={styles.listContainer}>
    <ScrollView contentContainerStyle={styles.list}>
{pastGuess.map((guess,idx)=>renderItem(guess,pastGuess.length-idx))}
    </ScrollView>
</View>
        </View>

    )
}

export default GameScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        padding:10,
        backgroundColor:"pink"
    },
    btncontainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        width:400,
        maxWidth:'90%'
    },
    listContainer:{
     flex:1,
     width:'100%'    
    },
    listItems:{
        borderColor:"#ccc",
        borderWidth:1,
        padding:15,
        marginVertical:10,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-around",
        width:"60%"

    },
    list:{
      flexGrow:1,
       justifyContent:"flex-end" ,
       alignItems:"center"
    }
})