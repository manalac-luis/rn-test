import React,{useState} from 'react'
import {View,Text, TextInput,StyleSheet} from 'react-native'

const TextAreaFormElement = () =>{
    const [text,setText] = useState("")
    return (
    <View style={styles.boundary}>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            multiline = {true}
            numberOfLines = {4}
            autoCorrect={false}
            value = {text}
            onChangeText = { (newValue) =>setText(newValue)}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    boundary:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextAreaFormElement