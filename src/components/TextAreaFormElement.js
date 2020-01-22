import React from 'react'
import {View,Text, TextInput,StyleSheet} from 'react-native'

const TextAreaFormElement = ({item,cb}) =>{
    console.log("item",item)
    return (
    <View >
        <Text>{item.props.label}</Text>
        <TextInput 
            style={styles.boundary}
            autoCapitalize="none"
            multiline = {true}
            numberOfLines = {4}
            autoCorrect={false}
         
            onChangeText = {(data)=>{
            
                let name = item.name
                let retObj  = {}
                retObj[name] =data
                cb(retObj)
            }}
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