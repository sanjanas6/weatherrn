import React from "react";
import { useEffect , useState } from "react";
import { View, Text, Alert , Button , StyleSheet} from "react-native";
import axios from "axios";

function CapitalData({ route }) {

  const [data , setData] = useState<any>({
    temperature: null,
    humidity: null,
    pressure: null,
    visibility: null
  })

  useEffect(() => {
    const data = route.params.data;
    console.log(data);
    getData(data)
  },[]);

  function getData(capitalData: string) {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=d34a8c4ec3aa787d79f50071cdae8836&query=${capitalData}`,
      )
      .then(res => {
        console.log(data);
        setData({
          temperature: res.data.current.temperature,
          humidity: res.data.current.humidity,
          pressure: res.data.current.pressure,
          visibility: res.data.current.visibility,
        });
      })
      .catch(() => {
        Alert.alert('Please check connection');
      });
  }
  
  return (
    <View style={styles.WeatherDataContainer}>
    {data.temperature === null ? (
      <Text style={styles.loading}>Loading...</Text>
    ) : (
      <View>
        <View>
          <Text style={styles.text}>Temperature: {data.temperature}</Text>
          <Text style={styles.text}>Humidity: {data.humidity}</Text>
          <Text style={styles.text}>Visibility: {data.visibility}</Text>
          <Text style={styles.text}>Pressure: {data.pressure}</Text>
        </View>
        <View style={styles.button}>
        </View>
      </View>
    )}
    </View>
)
}

export default CapitalData;

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
