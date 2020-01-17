import React,{useState} from 'react'
import {View,Text, StyleSheet,Picker} from 'react-native'

const SelectFormElement = ({data}) =>{

    [selected,setSelected]=useState("1")
    console.log(data)
    return (
    <View style={styles.boundary}>
        <Picker
                style={{width: 100}} 
                selectedValue={selected}
                onValueChange={(loc) => {
                    setSelected(loc)
                }}>
                {data.map((item, index) => (
                  <Picker.Item key={index} label={item[0]} value={index} />
                ))} 
        </Picker>
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