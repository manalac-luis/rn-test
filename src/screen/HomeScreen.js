import React,{useEffect,useState} from 'react'
import {View, Text, StyleSheet,FlatList} from 'react-native'
import mockio from '../api/mockio'
import ViewSchemaComposer from '../components/ViewSchemaComposer'

const HomeScreen = () =>{

    const [results,setResults] = useState([])
    const [errorMessage,setErrorMessage]=useState('')

    const getApi = async() =>{

        try{
        const response = await mockio.get('/5e1cd2193200006d00228873',{
            params:{
              
            }
        })
        console.log(response.data)
        setResults(response.data)
        } catch (err){
            setErrorMessage('Something went wrong')
            //console.log(err)
        }
    }

    useEffect(()=>{
        getApi()
    },[])

    return (
    <View>
        <ViewSchemaComposer schema={results}/>
    </View>
    
    )
}

const styles = StyleSheet.create({})

export default HomeScreen