import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const App = () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  const onClearValue = () => setValue(undefined);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.inputStyle}
      />
      <Button title={'Clear value'} onPress={onClearValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    padding: '5%',
    margin: '5%',
  },
});

export default App;
