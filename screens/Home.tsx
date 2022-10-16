import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const Home = ({navigation}) => {

const [country, setCountry] = useState<string>('');  
const handleReset = () => {
  setCountry('');
}
const handleCountry = (name:string) => {

      navigation.navigate("Country", { data: name });
      handleReset()
  };
  return (
      <View style={styles.homeScreen}>
        <TextInput
          placeholder="Enter Country Name"
          style={styles.input}
          value={country}
          onChangeText={(text)=> setCountry(text)}
        />
        <Button
          title="Submit"
          disabled={country.trim().length === 0 ? true : false}
          onPress={() => handleCountry(country)}
        />
      </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white'
  }, 
});