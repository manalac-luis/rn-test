import React from 'react'
import {View, Text} from 'react-native'


const Title = ({item}) =>{
 

return(
    <View>
        <Text>{item.props.title}</Text>
    </View>
)    
}
  
export default Title