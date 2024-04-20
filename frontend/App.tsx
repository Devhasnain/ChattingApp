import React from "react";
import {
  createTheme,
  darkColors,
  lightColors,
  ThemeProvider,
} from "@rneui/themed";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./redux/store";
import StackNavigations from "./navigations/StackNavigations";
import { StatusBar } from "expo-status-bar";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
  },
  mode: "light",
});

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar style="dark" />
          <StackNavigations />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
