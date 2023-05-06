import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const BodyText = props => {
    return (
        <View>

            <Text style={{...styles.body,...props.styles}}>
         {props.children} 
            </Text>

        </View>

    )
}

export default BodyText 

const styles=StyleSheet.create({
    body:{
        // fontFamily:'open-sans',
        fontSize:20,
    }
})