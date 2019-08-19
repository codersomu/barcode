import React from 'react';
import {
  View,
  Text
} from 'react-native';
import BarCodeReader from './Camera'


const App = () => {
  return (
    <View style={styles.body}>
        <Text>Test camara</Text>
        <BarCodeReader />
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100vh'
  }
});

export default App;
