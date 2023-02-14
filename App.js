import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Home/>
        <StatusBar hidden />
      </SafeAreaView>
    // <View style={styles.container}>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
