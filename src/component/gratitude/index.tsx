import * as React from 'react';
import { Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Gratitude from '../../database/entity/Gratitude';
export function GratitudeItem({ id }) {
  const [gratitude, setGratitude] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  useEffect(() => {
    const getData = async () => {
        const detail = await Gratitude.find(id)
        if (detail) {
            setGratitude(detail)
        }
    }
    getData()
  }, [])

  useEffect(() => {
    if (gratitude) {            
        setTitle(gratitude?.created)
        setDescription(gratitude?.text)
    }
  }, [gratitude])
  return (
    <>
      <Text variant='titleSmall'>{title}</Text>
      <Text>{description}</Text>
    </>
  )
}