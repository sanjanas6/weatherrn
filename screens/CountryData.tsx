import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";

const CountryData = ({ navigation, route  }) => {
  const [data, setData] = useState<any>({
    capital: null,
    population: null,
    latitude: null,
    longitude: null,
    flag: "",
    region: null,
    nativeName: null,
  });

  useEffect(() => {
    const data = route.params.data;
    console.log("data", data);
    getData(data);
  }, []);

  function getData(countryName: string) {
    console.log("CountryName", countryName);
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => {
        console.log(res);
        setData({
          capital: res.data[0].capital[0],
          population: res.data[0].population,
          latitude: res.data[0].latlng[0],
          longitude: res.data[0].latlng[1],
          region: res.data[0].region,
          // nativeName: res.data[0].nativeName,
          flag: res.data[0].flags.png,
        });
      });
  }
   
   const CapitalData = (text:any) =>{
    navigation.navigate("Capital", {data: text})
   }
  return (
    <View style={styles.WeatherDataContainer}>
    {data.capital === null ? (
      <Text style={styles.loading}>Loading...</Text>
    ) : (
      <View>
        <View>
          <Image source={{uri:data.flag}} style={{width: 100 , height: 100}}/>
          <Text style={styles.text}>Capital: {data.capital}</Text>
          <Text style={styles.text}>Population: {data.population}</Text>
          <Text style={styles.text}>Latitude: {data.latitude}</Text>
          <Text style={styles.text}>Longitude: {data.longitude}</Text>
          <Text style={styles.text}>Region: {data.region}</Text>
          {/* <Image/> */}
        </View>
        <View style={styles.button}>
          <Button
            title="Capital Weather"
            onPress={() => CapitalData(data.capital)}
          />
        </View>
      </View>
    )}
    </View>
)
};
export default CountryData;

const styles = StyleSheet.create({
  WeatherDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    fontSize: 40,
    color: "white",
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    marginVertical: 20,
  },
});
