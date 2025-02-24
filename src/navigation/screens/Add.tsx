import { Text } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import Gratitude from '../../database/entity/Gratitude';
import { useQueryClient } from '@tanstack/react-query';

export function Add() {

  const queryClient = useQueryClient();
  const [text, setText] = useState('')
  const onChangeText = (value: string) => {
    setText(value)
  }
  const onPress = async() => {
    let object = await Gratitude.add({text})
    if (object) {
      queryClient.invalidateQueries({ queryKey: ['gratitude'] })
      setText('')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <Text>Добавление благодарности</Text>
        <TextInput label={"Напишите свою благодарность на сегодня"} value={text} onChangeText={onChangeText} multiline={true} style={styles.textarea}/>
        <Button mode="contained" onPress={onPress}>
          Добавить
        </Button>
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
  textarea: {
    width: 500,
    height: 300
  }
});
