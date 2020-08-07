import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> App das Aliciãs</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#082',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    transform: [
      {rotateY: '30deg'}
    ]
  }
});
