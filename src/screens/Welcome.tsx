import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import logo from "../assets/images/logoWhite.png";
import locationImage from "../assets/images/locationPhone.png";
import backgroundImage from "../assets/images/policeCar.jpg";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export function Welcome() {
  const [focused, setFocused] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <Text style={styles.textHeader}>MULHER</Text>
          <Image
            source={locationImage}
            style={styles.locationImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerBackground}></View>

          <View style={[styles.login, focused && styles.loginFocused]}>
            <Input
              placeholder="Digite o seu nome"
              textAlign="center"
              leftIcon={<Icon name="user" size={24} color={colors.heading} />}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <Input
              placeholder="Digite o seu telefone"
              textAlign="center"
              leftIcon={<Icon name="phone" size={24} color={colors.heading} />}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.shape,
    position: "relative",
  },
  header: {
    paddingTop: 50,
    flex: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {},
  textHeader: {
    color: colors.blue,
    fontSize: 18,
    letterSpacing: 20,
  },
  locationImage: {
    width: 170,
    marginTop: -130,
  },
  footer: {
    flex: 4,
    backgroundColor: colors.shape,
    maxWidth: 500,
    alignItems: "center",
    paddingBottom: 20,
  },
  login: {
    marginTop: 10,
    position: "absolute",
    alignItems: "center",
    width: 330,
    backgroundColor: colors.white,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  loginFocused: {
    bottom: 30,
  },

  button: {
    width: 200,
    height: 60,
    backgroundColor: colors.blue,
    borderRadius: 20,
    marginVertical: 30,
    justifyContent: "center",
    bottom: 30,
  },
  textButton: {
    textAlign: "center",
    fontSize: 24,
    color: colors.white,
  },
  footerBackground: {
    marginTop: 80,
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: colors.red,
  },
});
