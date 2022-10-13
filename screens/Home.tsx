import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';

const Home = ({navigation}) => {
  const [country, setCountry] = useState<string>('');
  
  const countryText = (enteredname:any) => {
    setCountry(enteredname);
  };

  // const handleCountrySubmit = (name:string) => {

  //     navigation.navigate("Country", { data: name });
  // };
  const handleCountrySubmit = async (name: string) => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=d34a8c4ec3aa787d79f50071cdae8836&query=${name}`,
      )
      .then((res: any) => {
        if (res.data.success === false) {
          throw new Error();
        }
        navigation.navigate('Country', {data: name});
      })
      .catch(() => {
        Alert.alert('Data Not Found');
      });
  };

  return (
      <View style={styles.homeScreen}>
        <TextInput
          placeholder="Enter Country Name"
          style={styles.input}
          onChangeText={countryText}
        />
        <Button
          title="Submit"
          disabled={country.trim().length === 0 ? true : false}
          onPress={() => handleCountrySubmit(country)}
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