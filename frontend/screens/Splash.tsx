import { ActivityIndicator, View} from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size={25} />
    </View>
  );
};

export default Splash;
