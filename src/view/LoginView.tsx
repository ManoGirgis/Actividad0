import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import {
  headerstyle,
  textstyle,
  LogBox,
  inputstyle,
} from "./../../utils/Styles/login";

import { User } from "../model/User";
import { buttonclicker } from "./../../utils/functions/loginFunction";


const localImage = require("./../../utils/image/logo.png");




export const LoginView = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState(User);

  return (
    <>
      <ImageBackground
        source={require("./../../utils/image/backgroundlogin.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={LogBox.container}>
          <Image source={localImage} style={{ width: 200, height: 200 }} />
        </View>

        <View style={headerstyle.container}>
          <Text style={headerstyle.text}> Login </Text>
        </View>

        <View style={inputstyle.container}>
          <View style={inputstyle.texts}>
            <Text> Email </Text>

            <TextInput
              placeholder="example@mail.com"
              style={textstyle.container}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={(value) => setuser({ ...user, email: value })}
            />
          </View>
          <View style={inputstyle.texts}>
            <Text> Password </Text>

            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={textstyle.container}
              onChangeText={(value) => setuser({ ...user, password: value })}
            ></TextInput>
            <View style={{ padding: 10 }}></View>
          </View>
          <Button
            color=""
            title="Login"
            onPress={() => {
              buttonclicker(user,{navigation} );
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default LoginView;
