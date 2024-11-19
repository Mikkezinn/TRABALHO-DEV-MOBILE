import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './telas/login';
import TelaBemVindo from './telas/tela1';
import TelaCronometro from './telas/tela2';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="login">
   <Stack.Screen name="Login" component={TelaLogin} />
    <Stack.Screen name="BemVindo" component={TelaBemVindo} />
   <Stack.Screen name="Cronometro" component={TelaCronometro} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
