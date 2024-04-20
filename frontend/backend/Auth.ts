import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseUrl = "http://192.168.100.51:3000";

const LoginRequest = (email: string, password: string) => {
  return axios.post(`${baseUrl}/auth/login`, { email, password });
};

const SignUpRequest = (name: string, email: string, password: string) => {
  return axios.post(`${baseUrl}/auth/signup`, { name, email, password });
};

const CheckAuthState = async () => {
  let token = await AsyncStorage.getItem("token");
  return axios.get(`${baseUrl}/auth/refresh`, {
    headers: {
      Authorization: token,
    },
  });
};

export { LoginRequest, SignUpRequest, CheckAuthState };
