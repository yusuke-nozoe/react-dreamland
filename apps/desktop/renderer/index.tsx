// const information = document.getElementById('info')
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
import { AppRegistry, View } from "react-native-web";
import HomeScreen from 'client/screens/Home.screen'

const App: () => JSX.Element = () => (
  <View>
    <HomeScreen />
  </View>
)

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
