import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  const [country, setCountry] = useState<string>('');
  
  const countryText = (enteredname:any) => {
    setCountry(enteredname);
  };

  const handleCountrySubmit = async (name:string) => {

    try {
      const res = await fetch(
        `https://restcountries.com/v2/name/${country}?fullText=true`
      );
      if (!res.ok) {
        throw new Error("Please Enter Correct Country Name!!!");
      }
      const data = await res.json();
      navigation.navigate("Weather", { state: name });
      console.log(data)
    } catch (error) {
      Alert.alert("Please Enter Correct Country Name!!!");
    }
    // navigation.navigate('Weather')
    // const res = await fetch(`http://api.weatherstack.com/current?access_key=d34a8c4ec3aa787d79f50071cdae8836&query=${name}`)
    // const data = res.json();
    // console.log(data);
    // axios
    //   .get(
    //     `http://api.weatherstack.com/current?access_key=d34a8c4ec3aa787d79f50071cdae8836&query=${name}`,
    //   )
    //   .then(() => {
    //     if (res.data.success === false) {
    //       throw new Error();
    //     }
    //   })
    //   .catch(() => {
    //     Alert.alert('Oops! Something went wrong', 'Please check connection');
    //   });
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
          // onPress={() => {navigation.navigate('Weather')}}
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
