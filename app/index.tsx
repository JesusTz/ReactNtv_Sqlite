import { Text, View } from "react-native";
import * as SQLite from 'expo-sqlite'; 
// donde se valla a guardar datos en sqlite siempre hay que importar expo-sqlite


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
