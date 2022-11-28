import { Alert, Pressable, Text } from 'react-native'

const Button = () => {
  return (
    <Pressable onPress={() => Alert.alert('Boop')}>
      <Text>Boop</Text>
    </Pressable>
  )
}

export default Button
