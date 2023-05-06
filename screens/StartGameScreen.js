import { View, Text, StyleSheet, Dimensions, inputText, Keyboard } from 'react-native'
import React, { useState } from 'react'
import BodyText from './components/BodyText'
import Card from './components/Card'
import Input from './components/Input'
import { Button } from 'react-native'
import Color from './constants/Color'
import NumberContainer from './components/NumberContainer'
import MainButton from './components/MainButton'
import { ScrollView } from 'react-native'
// import {inpitText} from 'react-native'
// import inputText from 'react-native'
import { Alert } from 'react-native'


const StartGameScreen = (props) => {
    const [enteresValue, setEnteresValue] = useState('')
    // console.log(Dimensions.get('screen').width)
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)
    const [selectedNumber, setSelectedNumber] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const NumberInputHandler = inputText => {
        setEnteresValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetHandler = () => {
        setEnteresValue('')

        setConfirmed(false)
    }

    const confirmHandler = () => {
        const choseNumber = +enteresValue
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber >= 99) {
            Alert.alert('invailid Message', 'Number has to be number between 1 to 99', [{ text: "Okay", style: "destructive", onPress: resetHandler }])
            return
        }
        setConfirmed(true)
        setSelectedNumber(enteresValue)
        setEnteresValue('')
        Keyboard.dismiss()
    }




    let confirmOutput = <Card style={styles.sumaryContainer}>
        <BodyText>You Selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>Start Game</MainButton>
    </Card>

    return (
        <ScrollView>
            <View style={styles.screen}>

                <Text style={styles.title}>
                    Start a New Game!
                </Text>
                <View>

                    <Card style={styles.inputContainer}>

                        <BodyText >Select a Number!</BodyText>
                        <Input style={styles.input}
                            autoCorrect={false}
                            maxLength={2}
                            blurOnSubmit
                            keyboardType="phone-pad"
                            value={enteresValue}
                            onChangeText={NumberInputHandler}

                        />
                        <View style={styles.buttonContainer}>
                            <View style={{ width: buttonWidth }}>
                                <Button title="Reset" color={Color.primary} onPress={resetHandler} />
                            </View>
                            <View style={{ width: buttonWidth }}>
                                <Button title="Confirm" color={Color.accent} onPress={confirmHandler} />
                            </View>
                        </View>
                    </Card>
                    <View style={styles.confirm}>
                        {confirmed ? confirmOutput : null}
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // borderWidth:2,
        padding: 10,
        alignItems: 'center',
        // justifyContent: "center",
        // backgroundColor:"skyblue"


    },
    inputContainer: {
        //   borderWidth:2
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center'

    },
    input: {
        // borderWidth: 2,.
        borderBottomWidth: 2,
        width: 50,
        textAlign: 'center',
        marginBottom: 10

    },
    buttonContainer: {
        // borderWidth: 2,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        paddingHorizontal: 15,

    },
    confirm: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    sumaryContainer: {
        alignItems: "center",
        marginTop: 20
    },
    title: {
        fontSize: 20,
        marginVertical: 40,
        color:"darkblue"
    },
    
})