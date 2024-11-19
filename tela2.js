import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const TelaCronometro = ({ navigation }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => setIsRunning(!isRunning);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (totalMilliseconds) => {
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = totalMilliseconds % 1000;
    return {
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
      milliseconds: String(milliseconds).padStart(3, '0'),
    };
  };

  const { minutes, seconds, milliseconds } = formatTime(time);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
    <Text style={styles.millisecondsText}>{milliseconds} ms</Text>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={handleStartStop}>
         <Text style={styles.buttonText}>{isRunning ? 'Parar' : 'Iniciar'}</Text>
       </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
         <Text style={styles.buttonText}>Zerar</Text>
       </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default TelaCronometro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(154, 226, 250, 0.8)',
  },
  timerText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  millisecondsText: {
    fontSize: 40,
    marginBottom: 20,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});
