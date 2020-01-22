import React,{useState} from 'react'
import {View, StyleSheet,Text} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

const SelectFormElement = ({item, cb}) =>{

    //let radio_props = [
    //    {label: item.props.yesNoLabel[0], value: 0 },
     //   {label: item.props.yesNoLabel[1], value: 1 }
    //  ]
    
    const selectArray=[]
    console.log(item.props.options)
    for(i=0;i<item.props.options.length;i++){
        tempArray = item.props.options[i]
        console.log(tempArray)
        //let tempObj = item.props.options[i]}
        let tempItem = {label:tempArray[0],value:tempArray[1]}
        selectArray.push(tempItem)
    }
    console.log("selectArray",selectArray)

    //const [selected,setSelected]=useState([
    //    { label: 'Mild', value: 'MILD' },
    //    { label: 'Moderate', value: 'MODERATE' },
    //    { label: 'Severe', value: 'SEVERE' },
    //])
    return (
        <View>
            <Text>{item.props.label}</Text>
            <RNPickerSelect
            onValueChange={(value) => {
                let name = item.name
                let retObj  = {}
                retObj[name] =value
                cb(retObj)
                console.log(value)}}

            items={selectArray}
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

export default SelectFormElement