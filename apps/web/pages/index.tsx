import ClientButton from "client/Button";
import { Button } from "ui";
import { Pressable, Text } from 'react-native'

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Pressable onPress={() => alert('hoge')}><Text>BUTTON</Text></Pressable>
      <ClientButton />
      <Text>hoge</Text>
    </div>
  );
}
