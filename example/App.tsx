import React, {useState} from 'react';

import {multiply} from 'react-native-c5-test1';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

function App(): JSX.Element {
  const [result, setResult] = useState(0);

  const handlePress = () => {
    const r = multiply(10, 5);
    setResult(r);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello app</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Test</Text>
      </TouchableOpacity>
      <View>
        <Text>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 23,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
});

export default App;
