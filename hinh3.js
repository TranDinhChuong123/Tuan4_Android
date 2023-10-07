import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-elements";

import React, { useState } from "react";
import { Checkbox } from "react-native-paper";

export default function ({ navigation }) {
  // const [isChecked, setIsChecked] = useState(false);
  // const toggleCheckbox = () => {
  //   setIsChecked(!isChecked);
  // };
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const [password, setPassword1] = useState("");
  const isLowerCase = /[a-z]/.test(password);

  // const [checked, setChecked] = React.useState(false);
  var [Name, setName] = useState("");
  var [Password, setPassword] = useState("");
  var data = [
    {
      userName: "chuong",
      password: "123",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>PASSWORD GENERATOR</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={setPassword}
        ></TextInput>

        <Text style={styles.text1}>Password length</Text>

        <TextInput style={styles.textInput1}></TextInput>

        <Text style={styles.text2}>Include lower case letters</Text>

        <Text style={styles.text3}>Include upcase letters</Text>

        <Text style={styles.text4}>Include number</Text>

        <Text style={styles.text5}>Include special symbol</Text>
      </View>

      <TouchableOpacity style={styles.button3} onPress={() => {}}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.containerbox}
        // onPress={setIsChecked(!isChecked)}
        onPress={() => setIsChecked(!isChecked)}
      >
        <View
          style={[
            styles.checkbox,
            { backgroundColor: isChecked ? "white" : "white" },
          ]}
        >
          {isChecked && <Text style={styles.checkmark}>&#10004;</Text>}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.containerbox1}
        onPress={() => setIsChecked1(!isChecked1)}
      >
        <View
          style={[
            styles.checkbox,
            { backgroundColor: isChecked1 ? "white" : "white" },
          ]}
        >
          {isChecked1 && <Text style={styles.checkmark}>&#10004;</Text>}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.containerbox2}
        onPress={() => setIsChecked2(!isChecked2)}
      >
        <View
          style={[
            styles.checkbox,
            { backgroundColor: isChecked2 ? "white" : "white" },
          ]}
        >
          {isChecked2 && <Text style={styles.checkmark}>&#10004;</Text>}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.containerbox3}
        onPress={() => setIsChecked3(!isChecked3)}
      >
        <View
          style={[
            styles.checkbox,
            { backgroundColor: isChecked3 ? "white" : "white" },
          ]}
        >
          {isChecked3 && <Text style={styles.checkmark}>&#10004;</Text>}
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerbox: {
    position: "absolute",
    top: 328,
    left: 317,
    // right: 100,
  },
  containerbox1: {
    position: "absolute",
    top: 385,
    left: 317,
    // right: 100,
  },
  containerbox2: {
    position: "absolute",
    top: 442,
    left: 317,
    // right: 100,
  },
  containerbox3: {
    position: "absolute",
    top: 499,
    left: 317,
    // right: 100,
  },

  checkbox: {
    position: "absolute",
    width: 25, // Độ rộng của checkbox
    height: 25, // Chiều cao của checkbox
    borderWidth: 2, // Độ rộng của viền
    borderRadius: 5, // Độ cong của góc
    alignItems: "center",
    justifyContent: "center",
  },
  checkmark: {
    color: "black", // Màu của biểu tượng checkmark
    fontSize: 30,
  },
  container: {
    flex: 1,
    // position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "#d8efdf",
    backgroundColor: "#8b8bbd",
    // alignItems: "center",
    // justifyContent: "center",
  },
  container2: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    // justifyContent: "center",
    width: 322,
    // height: 800,
    paddingTop: 19,
    bottom: 19,
    top: 19,

    // left: 19,
    // bottom: 19,
    color: "#d8efdf",
    backgroundColor: "#23235B",
    borderRadius: 15,
  },

  textInput: {
    // flex: 1,
    // marginLeft: 35,
    paddingLeft: 10,
    position: "absolute",
    width: 297,
    height: 55,
    top: 141,
    alignItems: "center",

    // backgroundColor: "#ddbe3b",
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  text: {
    position: "absolute",
    color: "#000000",
    width: 189,
    height: 64,
    top: 44,

    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 16, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 19, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: " #000000",
  },
  text3: {
    position: "absolute",
    // color: "#000000",
    width: 206,
    height: 26,
    top: 364,
    left: 20,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: " #000000",
  },
  text4: {
    position: "absolute",
    // color: "#000000",
    width: 190,
    height: 25,
    top: 418,
    left: 20,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: " #000000",
  },
  text5: {
    position: "absolute",
    // color: "#000000",
    width: 200,
    height: 25,
    top: 471,
    left: 20,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: " #000000",
  },
  textInput1: {
    paddingLeft: 10,
    // paddingTop: 15,
    position: "absolute",
    width: 118,
    height: 33,
    top: 243,
    left: 190,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    borderWidth: 1,
    backgroundColor: "#fafafa",
    // borderColor: "#C4C4C4",
    color: "black",
  },
  placeholderStyle: {
    // width: 259,
    // height: 21,
    // top: 346,
    // left: 53,
    color: "#C4C4C4", // Màu sắc của placeholder
    // fontStyle: "italic", // Font style của placeholder
    // Các kiểu dáng khác cho placeholder
  },

  text1: {
    position: "absolute",
    width: 223,
    height: 24,
    top: 249,
    left: 20,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    // textAlign: "center",
    color: " #000000",
  },
  text2: {
    position: "absolute",
    width: 247,
    height: 27,
    top: 309,
    left: 20,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: " #000000",
  },

  gradient: {
    position: "relative",
    width: 360,
    height: 640,
    flex: 1,
    width: "100%",
    height: "100%",
  },

  button2: {
    // position: 'relative',
    width: 293,
    height: 68,
    position: "absolute",
    top: 252,
    borderRadius: 5,
    borderColor: "#1511EB",
    borderWidth: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  button3: {
    // position: 'relative',
    width: 269,
    height: 55,
    position: "absolute",
    top: 544,
    borderRadius: 5,
    borderColor: "#1511EB",
    borderWidth: 1,
    backgroundColor: "#0D5DB6",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    // top: 498,
    // left: 29,
    // position: 'absolute',
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
    color: "#ffffff", // Màu văn bản
    // backgroundColor: "#", // Màu nền của nút
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
