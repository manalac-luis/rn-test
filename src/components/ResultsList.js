import React from 'react'
import {View, Text, StyleSheet, FlatList,Button,Alert,Picker} from 'react-native'
import {withNavigation} from 'react-navigation'
import YesNoFormElement from './YesNoFormElement'
import SelectFormElement from './SelectFormElement'
import TextAreaFormElement from './TextAreaFormElement'



//Only records with 'name' field, build a form
const ResultsList = ({title,results,navigation}) =>{

    const callAlert = () =>{
        Alert.alert(
            'Form Submit',
            '',
            [
            {   text: '{ "hadAllergies":true, ', 
            },
            {   text: '  "severity":"SEVERE", ', 
            },
            {   text: '  "context":"I had allergies today while walking down"} ', 
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }
    if (!results.length){
        return null
    }
  
    return (
    <View >
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            data={results}
            keyExtractor = {(result)=>result._id}
            renderItem={({item})=>{
                return (
                    <>
                    <Text style={styles.titleStyle}>{item.props.label}</Text>
                    {item.component ==="YesNoFormElement" ? <YesNoFormElement data={item.props.yesNoLabel}/>: null}
                    {item.component ==="SelectFormElement" ? <SelectFormElement data={item.props.options}/>: null}
                    {item.component ==="TextAreaFormElement" ? <TextAreaFormElement/>: null}
                    
                    </>
                )
            }}
        
        />
        <Button 
            title="Submit"
            onPress = {()=>{
                callAlert()
            }}
        />
         <Picker
            style={{width: 100}} 
            selectedValue="1"
            onValueChange={(loc) => {
                
            }}>
            <Picker.Item label="Location 1" value="1" /> 
            <Picker.Item label="Location 2" value="2" />
            <Picker.Item label="Location 3" value="3" />
        </Picker>
    </View>
    )
}
//<ResultsDetail result={item}/>
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:12,
        fontWeight:'bold',
        marginLeft:15
    },
    container:{
       marginBottom:10 
    },
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default withNavigation(ResultsList)
/*
<View style={styles.container}>
<Picker
                        selectedValue={0}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>{

                            }
                            
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />

                        </Picker>
*/