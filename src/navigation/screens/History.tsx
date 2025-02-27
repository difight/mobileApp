import { Text } from '@react-navigation/elements';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Gratitude from '../../database/entity/Gratitude';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { List, Portal, Modal } from 'react-native-paper';
import { GratitudeItem } from '../../component/gratitude';

const getData = async () => {
  return await Gratitude.get()
}

export function History() {
  const [gratitudes, setGratitude] = useState([])
  const [listGratitudes, setListGratitudes] = useState([])

  const [visibleModal, setVisibleModal] = useState(false)
  const [contentModal, setContentModal] = useState('')

  const showModal = () => setVisibleModal(true)
  const hideModal = () => setVisibleModal(false)
  const containerStyle = {
    backgroundColor: 'white', padding: 20
  };

  const onPress = (id: string) => {
    const content = <GratitudeItem id={id} />
    setContentModal(content)
    showModal()
  }

  const { data, isLoading, error } = useQuery({queryKey: ['gratitude'], queryFn: getData});
  useEffect(() => {
    setGratitude(data?.docs)
  },[data])

  useEffect(() => {
    console.log(gratitudes)
    if (gratitudes) {
      const list = gratitudes.map((item) => (
          <List.Item key={item?._id} title={item?.text} left={() => <Text>{item?.created}</Text>} onPress={() => onPress(item?._id)}/>
        )
      )
      setListGratitudes(list)
    }

  }, [gratitudes])

  return (
    <SafeAreaView style={styles.container}>
      <Portal>
        <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          {contentModal}
        </Modal>
      </Portal>
      <Text>История благодарностей</Text>
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
