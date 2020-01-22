import React,{useState} from 'react'
import {View, Text, StyleSheet, FlatList,Button,Alert,Picker} from 'react-native'
import {withNavigation} from 'react-navigation'
import Title from './Title'
import YesNoFormElement from './YesNoFormElement'
import SelectFormElement from './SelectFormElement'
import TextAreaFormElement from './TextAreaFormElement'

const ViewSchemaComposer = (props) =>{

console.log(props.schema) 
const [formData,setFormData] = useState({}) 
//input is an object with each field corresponding to a control
const setInput = (data) =>{
    const keys = Object.keys(data)
    let tempData = formData
    for(i=0;i<keys.length;i++){
        tempData[keys[i]]=data[keys[i]]
    }
    setFormData(tempData)
    //console.log("keys:",keys)
    //console.log("setInput",JSON.stringify(data))
    console.log("tempData:",JSON.stringify(tempData))
}
const  ComponentList = (props) => {
    return (
      <View>
        {props.components.map((component, index) =>{ 
          if (component.component==="Title"){
              return <Title key={index} item={component} />
          } 
          else if (component.component==="YesNoFormElement") {
              return <YesNoFormElement key={index} item={component} cb={setInput}/>
          } 
          else if (component.component==="SelectFormElement") {
            return <SelectFormElement key={index} item={component} cb={setInput}/>
          }
          else if (component.component==="TextAreaFormElement") {
            return <TextAreaFormElement key={index} item={component} cb={setInput}/>
          } 
        })}
         <Button 
            title="Submit"
            onPress = {() =>{
                Alert.alert(
                    'Form Data',
                    'Send to API',
                    [
                      {text: JSON.stringify(formData), onPress: () => console.log('Ask me later pressed')},
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                  );
                console.log(JSON.stringify(formData))
            }}
        />
      </View>
    );
  }

return(
    <View>
        <ComponentList components={props.schema} />
    </View>
)    
}
  
export default withNavigation(ViewSchemaComposer)
//onPress = {()=>navigation.navigate('Counter')}