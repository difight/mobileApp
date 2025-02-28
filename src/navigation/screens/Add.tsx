import { Text } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GratitudeNew } from '../../component/gratitude/new';
import Gratitude from "../../database/entity/Gratitude";
import { useState, useEffect } from 'react';

export function Add() {  
  const [canNew, setCanNew] = useState(true);
  const [content, setContent] = useState('');
  
  useEffect(() => {
    const check = async () => {
      const checkData = await Gratitude.checkForPost()
      if (!checkData) {
          setCanNew(false)
      }
    }
    check()
  }, [])

  useEffect(() => {
    let content = ''
    if (canNew) {
      content = <GratitudeNew/>
    } else {
      content = <Text>Сегодня вы уже добавляли благодарность, приходите завтра</Text>
    }
    setContent(content)
  }, [canNew])
  return (
    <SafeAreaView style={styles.container}>
      <Text>Добавление благодарности</Text>
        {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  }
});
