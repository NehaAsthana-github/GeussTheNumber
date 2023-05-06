import { View, Text,StyleSheet, ScrollView,Image, Dimensions } from 'react-native'
import React from 'react'
import BodyText from './components/BodyText'
import Color from './constants/Color'
import Success from "../assets/success.png"
import MainButton from './components/MainButton'
const GameOverScreen = (props) => {
    return (
        <ScrollView >
        <View style={styles.screen}>

           <BodyText style={styles.font}>The Game is Over </BodyText>
<View style={styles.imgContainer}>
<Image 
    source={require('../assets/success.png')}
    style={styles.image} 
    resizeMode="cover"
    />
    
</View>
<View style={styles.resultContainer}>
        <BodyText style={styles.resultContainer}>Your phone need <Text>{props.numberOfRounda}</Text>rounds to guess the number...<Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
        </View>
        </ScrollView>
    )
}

export default GameOverScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    font:{
        marginTop:60,
        fontWeight:'bold',
        fontSize:18,
        
    },
    imgContainer:{
        borderRadius:20,
        borderWidth:3,
        borderColor:"black",
        width:Dimensions.get('window').width*0.7,
        height:Dimensions.get('window').width*0.7,
        overflow:'hidden',
        marginVertical:Dimensions.get('window').height/60
},
image:{
    width:Dimensions.get('window').width*0.7,
        height:Dimensions.get('window').width*0.7,
},
highlight:{
    color:Color.primary
},
resultContainer:{
    marginHorizontal:Dimensions.get('window').width/6,
    marginVertical:20,
    marginTop:20,
    
    
}
})