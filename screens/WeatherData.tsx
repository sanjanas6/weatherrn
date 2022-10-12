import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';

const WeatherData = ({route }) => {
  const [data, setData] = useState<any>({
    capital: null,
    population: null,
    lating: null,
    flag: '',
    temperature: null,
    humidity: null,
    pressure: null,
    visibility: null,
    region: null,
  });
   useEffect(() => {
    const data = route.params.state;
    console.log('data', data);
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=d34a8c4ec3aa787d79f50071cdae8836&query=${data}`,
      )
      .then((res: any) => {
        let capitalName = res.data.location.country;
        getData(capitalName);
      })
      .catch(() => {
        Alert.alert('Oops! Something went wrong', 'Please check connection');
      });
  }, []);

  function getData(capitalName: string) {
    console.log('CapitalName', capitalName);
    axios
      .get(`https://restcountries.com/v3.1/name/${capitalName}`)
      .then(res => {
        setData({
          capital: res.data[0].capital[0],
          population: res.data[0].population,
          latitude: res.data[0].latlng[0],
          longitude: res.data[0].latlng[1],
          region: res.data[0].region,

          // flag: res.data[0].flags.png,
        });
      });
  }

  return (
      <View style={styles.WeatherDataContainer}>
        {data.capital === null ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <View>
            <View>
              <Text style={styles.text}>Capital: {data.capital}</Text>
              <Text style={styles.text}>Population: {data.population}</Text>
              <Text style={styles.text}>Latitude: {data.latitude}</Text>
              <Text style={styles.text}>Longitude: {data.longitude}</Text>
              <Text style={styles.text}>Region: {data.region}</Text>
              {/* <Text style={styles.text}>Native Name: {data.nativeName}</Text> */}
              {/* <Image/> */}
            </View>
            <View style={styles.button}>
              <Button
                title="Capital Weather"
                // onPress={() => getCurrentCityData(data.capital)}
              />
            </View>
          </View>
        )}
      </View>
    
  );
};

export default WeatherData;

const styles = StyleSheet.create({
  WeatherDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 40,
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginVertical: 20,
  },
});
