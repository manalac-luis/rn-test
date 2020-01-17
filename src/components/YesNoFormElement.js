import React,{useState} from 'react'
import {View, StyleSheet,Text,Picker} from 'react-native'

const YesNoFormElement = ({data}) =>{

    [selected,setSelected]=useState(0)
    
    return (
 
            <Picker
                style={{width: 100}} 
                selectedValue={selected}
                onValueChange={(loc) => {
                    setSelected(loc)
                    console.log("loc",loc)
                }}>
                {data.map((item, index) => (
                  <Picker.Item key={index} label={item} value={index} />
                ))}
               
            </Picker>
        
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
/*
<View style={styles.boundary}>
        <Text>YesNoFormElement</Text>
        <Picker
            style={{height:50,width:100}}
            selectedValue={selected}
            onValueChange={(itemValue,itemIndex)=>{
                setSelected(itemValue)
                console.log("onValueChange:",itemValue)
            }}
        >
            <Picker.Item label="Yes" value={0} />
            <Picker.Item label="No" value={1}  />
        </Picker>
    </View>
*/