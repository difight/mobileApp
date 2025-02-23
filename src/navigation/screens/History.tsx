import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import Gratitude from '../../database/entity/Gratitude';
import { useState, useEffect } from 'react';

export function History() {
  const [gratitudes, setGratitude] = useState([])
  useEffect(() => {
    const getData = async () => {
      const fetch =  await Gratitude.get()
      console.log('fetch=', fetch)
      setGratitude(fetch)
    }
    getData()
  },[])
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
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
