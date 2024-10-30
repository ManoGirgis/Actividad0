import { StyleSheet } from "react-native";

const inputstyle = StyleSheet.create({
  container: {
    backgroundColor: "#ffffffa0",
    padding: 10,
    margin: 2,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  texts: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "cyan",
    padding: 10,
    margin: 2,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});

const headerstyle = StyleSheet.create({
  container: {
    backgroundColor: "#ffffffc0",
    padding: 2,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "cyan",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
});

const textstyle = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff0",
    padding: 2,
    margin: 2,
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
  },
});

const LogBox = StyleSheet.create({
  container: {
    padding: 2,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { headerstyle, textstyle, inputstyle, LogBox };
