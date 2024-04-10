import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/app/Home"; 
import CookieClickerScreen from "./src/screens/app/CookieClickerScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <Home /> 
      <CookieClickerScreen />
    </SafeAreaProvider>
  );
};

export default App;
