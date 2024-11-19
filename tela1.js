import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const TelaBemVindo = ({ navigation }) => {
  const irParaTela2 = () => {
    navigation.navigate('Cronometro'); 
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://png.pngtree.com/png-clipart/20230508/original/pngtree-chronometer-flat-icon-png-image_9148016.png',
      }}
      style={styles.background}
    >
  <View style={styles.container}>
   <Text style={styles.welcomeText}>Bem Vindo!</Text>
    <TouchableOpacity style={styles.button} onPress={irParaTela2}>
     <Text style={styles.buttonText}>Entrar</Text>
   </TouchableOpacity>
     <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

export default TelaBemVindo;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(154, 226, 250, 0.9)', 
  },
  welcomeText: {
   fontSize: 40,
  fontWeight: 'bold',
   color: '#000',
   textShadowColor: 'rgba(255, 255, 255, 0.8)', 
   textShadowOffset: { width: 1, height: 1 },
   textShadowRadius: 5,
   textAlign: 'center',
   marginBottom: 30,
  },
  button: {
  backgroundColor: '#fff',
   paddingVertical: 15,
   paddingHorizontal: 30,
   borderRadius: 40,
  borderWidth: 2,
   borderColor: '#000',
  shadowColor: '#000',
   shadowOffset: { width: 2, height: 2 },
 shadowOpacity: 0.25,
  shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
});
