import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Country from "./screens/CountryData";
import Capital from "./screens/CapitalData";

const stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleAlign: "center",
};
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home} options={{contentStyle: {backgroundColor: "#152238"}}} />
        <stack.Screen
          name='Country'
          component={Country}
          options={{
            title: "Country Information",
            contentStyle: {backgroundColor: "#152238"}
          }}
        /> 
        <stack.Screen name='Capital' component={Capital} options={{contentStyle: {backgroundColor: "#152238"}}}/>
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
