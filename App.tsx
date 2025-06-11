import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./src/components/Header";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedHeaderDemo from "./src/components/DemoScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Header />
    // </View>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AnimatedHeaderDemo />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
