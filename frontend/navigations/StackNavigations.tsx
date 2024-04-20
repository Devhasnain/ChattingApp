import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import BottomTabNavigations from "./BottomTabNavigations";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import { CheckAuthState } from "../backend/Auth";
import { setUser } from "../redux/reducers/AuthSlice";
import Splash from "../screens/Splash";

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const StackNavigations = () => {
  const { user } = useSelector((state: RootState) => state.AuthSlice);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const onAuthStateChanged = async () => {
      try {
        let res = await CheckAuthState();
        dispatch(setUser(res.data.user));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    if (!user) {
        onAuthStateChanged();
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen options={options} name="Splash" component={Splash} />
        ) : user ? (
          <>
            <Stack.Screen
              options={options}
              name="Main"
              component={BottomTabNavigations}
            />
          </>
        ) : (
          <>
            <Stack.Screen options={options} name="Login" component={Login} />
            <Stack.Screen options={options} name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigations;
