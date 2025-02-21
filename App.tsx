import { View, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { config } from "./config/gluestack-ui.config";
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";

import { Routes } from "@routes/index";
import { Loading } from "@components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      
      {fontsLoaded ? <Routes /> : <Loading />}

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </GluestackUIProvider>
  );
}
