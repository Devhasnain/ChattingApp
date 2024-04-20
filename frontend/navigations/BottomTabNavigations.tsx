import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const options: BottomTabNavigationOptions = {
  headerShown: false,
};

const BottomTabNavigations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={options} component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
