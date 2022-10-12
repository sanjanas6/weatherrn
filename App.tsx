import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Weather from "./screens/WeatherData";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Weather App",
            headerStyle: {
              backgroundColor: "#FFFFE0",
            },
            headerTintColor: "black", //Title Color for our Header
            contentStyle: {backgroundColor: "#152238"}
          }}
        />
        <stack.Screen name='Weather' component={Weather} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
