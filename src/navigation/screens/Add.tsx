import { Text } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export function Add() {
  
  return (
    <SafeAreaView style={styles.container}>
        <Text>Добавление благодарности</Text>
        <TextInput/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
