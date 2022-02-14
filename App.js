import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const App = () => {
  return (
    <View style={styles.container}>
      <Icon name="albums" size={64} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
