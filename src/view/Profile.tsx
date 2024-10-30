import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  headerstyle,
  textstyle,
  LogBox,
  inputstyle,
} from "../../utils/Styles/login";

import { User } from "../model/User";
import { buttonclicker } from "../../utils/functions/loginFunction";

const localImage = require("./../../utils/image/logo.png");

export const Profile = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState(User);

  return (
    <>
      <ImageBackground
        source={require("./../../utils/image/backgroundlogin.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <View style={LogBox.container}>
            <Image source={localImage} style={{ width: 200, height: 200 }} />
          </View>

          <View style={headerstyle.container}>
            <Text style={headerstyle.text}> Profile </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Profile;
