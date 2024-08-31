import { View, Text } from 'react-native'
import React from 'react'
import ProfileSrceen from './components/ProfileSrceen'
import FlastListExample from './components/FlatListExample'
import FlatlistcallBackend from './components/FlatlistcallBackend'
import NewApp from './components/NewApp'
import AxiosgetData from './components/AxiosgetData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'
import ModelExample from './components/ModelExample'
import WeatherApp from './components/WeatherApp'
const App = (): React.JSX.Element => {
return (
  <View>  
    {/* <WeatherBangkok/> */}
    {/* <WeatherLondon/> */}
    <WeatherApp/>
  </View>
  )
}
export default App