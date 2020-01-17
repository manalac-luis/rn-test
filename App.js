//import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screen/HomeScreen'
import ResultsShowScreen from './src/screen/ResultsShowScreen'

const navigator = createStackNavigator ({
  Home: HomeScreen,
  ResultsShow:ResultsShowScreen
},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title:'RN-Test'
  }
})

export default createAppContainer(navigator)
