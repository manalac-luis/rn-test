import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'


const ResultsShowScreen = ({navigation}) =>{
    const item = navigation.getParam('item')
 
    if (item.name){
        return(
            <View>
                <Text>ResultShowScreen</Text>
                <Text>Form</Text>
            </View>
            )
    } else {
        return(
            <View>
                <Text>ResultShowScreen</Text>
                <Text>{item._id}</Text>
                <Text>{item.component}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default ResultsShowScreen