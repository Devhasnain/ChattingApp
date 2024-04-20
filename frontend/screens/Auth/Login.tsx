import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Input, Text } from "@rneui/themed";
import styles from "../../styles/ui.styles";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginRequest } from "../../backend/Auth";
import { useNavigation } from "@react-navigation/native";

type formType = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    flex1,
    flexCol,
    alignCenter,
    justifyCenter,
    justifyEnd,
    flexRow,
    px_10,
    gapYmd,
  } = styles();

  const [form, setForm] = useState<formType>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      if (!form.email || !form.password) {
        Alert.alert("All fields are required");
        return;
      }

      setLoading(true);

      const res = await LoginRequest(form.email, form.password);
      await AsyncStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
      Alert.alert(error?.message);
    }
  };

  const RedirectToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[flex1, px_10]}
    >
      <View style={[flex1, flexCol, justifyEnd]}>
        <View style={[flexRow, alignCenter, justifyCenter, { height: 150 }]}>
          <Text h4>Logo</Text>
        </View>
        <View style={[flexCol, gapYmd]}>
          <Text h4>Login to your account</Text>
          <View>
            <Input
              placeholder="Email Address"
              containerStyle={{ paddingHorizontal: 0 }}
              onChangeText={(e) => {
                setForm((pre) => ({ ...pre, email: e }));
              }}
            />
            <Input
              placeholder="Password"
              containerStyle={{ paddingHorizontal: 0 }}
              onChangeText={(e) => {
                setForm((pre) => ({ ...pre, password: e }));
              }}
            />
          </View>
          <View style={[flexRow, alignCenter]}>
            <Button
              loading={loading}
              onPress={onSubmit}
              title={"Login"}
              containerStyle={{ width: "80%" }}
              style={{ width: "100%" }}
              size="lg"
            />
            <Button
              onPress={RedirectToSignUp}
              type="clear"
              size="lg"
              title={"Sign Up"}
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
