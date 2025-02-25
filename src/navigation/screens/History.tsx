import { Text } from '@react-navigation/elements';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Gratitude from '../../database/entity/Gratitude';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { List } from 'react-native-paper';

const getData = async () => {
  return await Gratitude.get()
}

export function History() {
  const [gratitudes, setGratitude] = useState([])
  const [listGratitudes, setListGratitudes] = useState([])

  const { data, isLoading, error } = useQuery({queryKey: ['gratitude'], queryFn: getData});
  useEffect(() => {
    setGratitude(data?.docs)
  },[data])

  useEffect(() => {
    console.log(gratitudes)
    if (gratitudes) {
      const list = gratitudes.map((item) => (
          <List.Item key={item?._id} title={item?.text} left={() => <Text>{item?.created}</Text>}/>
        )
      )
      setListGratitudes(list)
    }

  }, [gratitudes])

  return (
    <SafeAreaView style={styles.container}>
      <Text>History Screen</Text>
      <ScrollView>
        <List.Section>
          {listGratitudes}
        </List.Section>
      </ScrollView>
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
