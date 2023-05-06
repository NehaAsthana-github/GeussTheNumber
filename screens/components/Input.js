import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = props => {
    return <TextInput {...props} style={{...styles.input,...props.style}}/>
}

export default Input

const styles=StyleSheet.create({
    input:{

    }
})