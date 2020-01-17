import React,{useEffect,useState} from 'react'
import {View, Text, StyleSheet,FlatList} from 'react-native'
import mockio from '../api/mockio'
import ResultsList from '../components/ResultsList'

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

    const filterByName = (results) =>{
        return results.filter(result=>{
            return result.name
        })

    }

    return (
    <View>
        <Text>Records with Name Field</Text>
        <ResultsList
            results = {filterByName(results)} 
            title="Form" 
        />
        
    </View>
    
    )
}
/*
<FlatList
            data={results}
            keyExtractor={(item)=>item._id}
            renderItem={({item})=>{
                return (
                <Text>id: {item._id} cmp: {item.component} </Text>
                )
            }}
        />
*/
const styles = StyleSheet.create({})

export default HomeScreen