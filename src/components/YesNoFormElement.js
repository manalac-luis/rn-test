import React,{useEffect} from 'react'
import {View, StyleSheet,Text,Picker} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

const YesNoFormElement = ({item,cb}) =>{

    let radio_props = [
        {label: item.props.yesNoLabel[0], value: 0 },
        {label: item.props.yesNoLabel[1], value: 1 }
      ]
    console.log("yesNoLabel",item.props.yesNoLabel)

    useEffect(() => {
        let name = item.name
        let retObj  = {}
        retObj[name] =0
        cb(retObj)
      },[]);

    return (
        <View>
            <Text>{item.props.label}</Text>
            <RadioForm
                radio_props={radio_props}
                initial={0}
                
                onPress = {(data)=>{
            
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

export default YesNoFormElement
//onPress={(value) => {console.log(value)}}