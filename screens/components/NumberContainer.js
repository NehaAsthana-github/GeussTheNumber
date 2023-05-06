import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constants/Color'

const NumberContainer = props => {
    return (
        <View style={styles.container}>

            <Text style={styles.number}>
            {props.children}
            </Text>

        </View>

    )
}

export default NumberContainer

const styles=StyleSheet.create({
container:{
    borderWidth:2,
    borderColor:Color.primary,
    padding:10,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10

},
number:{
    color:Color.primary,
    fontSize:22
}
})