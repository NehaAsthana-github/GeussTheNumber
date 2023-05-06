import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
const MainButton = props => {
    return (
        <View>

            <Pressable onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {props.children}
                    </Text>
                </View>
            </Pressable>
        </View>

    )
}

export default MainButton


const styles=StyleSheet.create({
     button:{
        backgroundColor:Color.primary,
        padding:12,
        paddingVertical:20,
        borderRadius:25
     },
     buttonText:{
        color:"white",
        fontSize:18,
        textAlign:'center'

     }
})