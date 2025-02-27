import { Button, TextInput } from "react-native-paper"
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Gratitude from "../../database/entity/Gratitude";
import { StyleSheet } from 'react-native';

export function GratitudeNew() { 
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
        <>
            <TextInput label={"Напишите свою благодарность на сегодня"} value={text} onChangeText={onChangeText} multiline={true} style={styles.textarea}/>
            <Button mode="contained" onPress={onPress}>
                Добавить
            </Button>
        </>
    )
}

const styles = StyleSheet.create({
    textarea: {
      width: 500,
      height: 300
    }
  });