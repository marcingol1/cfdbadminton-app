import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: 'papayawhip',
          backgroundColor: 'black',
          fontSize: 20,
          padding: 20,
          height: '100%'
        }}
      >
        Open up App.tsx to start working on your app!!!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
