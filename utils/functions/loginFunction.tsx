function buttonclicker(User, { navigation }) {
  console.log("Bien Venido \n" + User.email + "\r\n" + User.password);
  navigation.navigate("Profile");
}

export { buttonclicker };
