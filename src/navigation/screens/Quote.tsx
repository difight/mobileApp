import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import AI from "../../lib/ai"

export function Quote() {
  useEffect(() => {
    const getQute = async () => {
      const ans = await AI.getAnswer('расскажи мне что нубудь')
      console.log('ans=', ans)
    }
    getQute()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Quote Screen</Text>
    </View>
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
