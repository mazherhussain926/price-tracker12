import React from "react";
import { View, Pressable, Image, StyleSheet } from "react-native";

export default function SocialLoginButtons() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Image
          source={require("../../assets/images/social/google.png")}
          style={styles.icon}
        />
      </Pressable>
      <Pressable style={styles.button}>
        <Image
          source={require("../../assets/images/social/facebook.png")}
          style={styles.icon}
        />
      </Pressable>
      <Pressable style={styles.button}>
        <Image
          source={require("../../assets/images/social/twitter.png")}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "80%",
  },
  button: {
    width: 51,
    height: 51,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
