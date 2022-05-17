import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const App = () => {
  return (
    <View style={styles.container}>
      <Text>Init app</Text>
    </View>
  )
}

export default App

App.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})