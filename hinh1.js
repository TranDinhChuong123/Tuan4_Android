import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

import React, { useState } from "react";

export default function ({ navigation }) {
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
      <Text style={styles.text1}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require("./avatar_user 1.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={setName}
          value={Name}
        />
      </View>
      <View style={styles.inputContainer1}>
        <Image
          source={require("./lock-152879 1.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon1}
        />
        <TextInput
          style={styles.textInput1}
          placeholder="Password"
          onChangeText={setPassword}
          value={Password}
        />
      </View>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          const user = data.find(
            (userData) =>
              userData.userName === Name && userData.password === Password
          );

          if (user) {
            // Đăng nhập thành công, bạn có thể thực hiện các hành động tương ứng ở đây
            alert("Đăng nhập thành công");
          } else {
            // Đăng nhập thất bại, bạn có thể hiển thị thông báo lỗi hoặc thực hiện xử lý khác
            alert(
              "Đăng nhập thất bại. Vui lòng kiểm tra tên người dùng và mật khẩu."
            );
          }
        }}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.text2}>Forgot your password?</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "#d8efdf",
    backgroundColor: "#f1c201",
  },

  passIcon: {
    position: "absolute",
    backgroundColor: null,
    top: 76,
    left: 128,
    height: 117,
    width: 105,
  },
  inputContainer: {
    position: "absolute",
    backgroundColor: "#475993",
    width: 330,
    height: 54,
    top: 192,
  },
  icon: {
    // position: "absolute",
    width: 32,
    height: 32,
    left: 9,
    top: 10,
    zIndex: 1,
  },
  icon1: {
    // position: "absolute",
    width: 32,
    height: 32,
    left: 9,
    top: 10,

    zIndex: 1,
  },
  inputContainer1: {
    position: "absolute",
    position: "absolute",
    backgroundColor: "#475993",
    width: 330,
    height: 54,
    top: 266,
  },

  inputContainer2: {
    position: "absolute",
    backgroundColor: "#ffffff",
    width: 110,
    height: 45,
    top: 527,
    left: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  icon2: {
    // position: "absolute",
    width: 28,
    height: 33,
    // marginRight: 7,
    // top: 1,

    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },

  textInput: {
    // flex: 1,
    // marginLeft: 35,
    paddingLeft: 50,
    position: "absolute",
    width: 330,
    height: 54,

    alignItems: "center",

    backgroundColor: "#ddbe3b",
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    alignItems: "center",
    backgroundColor: "#ddbe3b",
  },
  textInput1: {
    // paddingLeft: 20,
    position: "absolute",
    width: 330,
    height: 54,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    paddingLeft: 50,
    alignItems: "center",
    backgroundColor: "#ddbe3b",
  },

  text: {
    position: "absolute",
    color: "#5D25FA",
    top: 5,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 16, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
  },

  text1: {
    position: "absolute",
    width: 87,
    height: 35,
    top: 82,
    left: 82,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 25, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 29, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    // textAlign: "center",
    color: " #000000",
  },
  text2: {
    position: "absolute",
    width: 239,
    height: 27,
    top: 469,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 23, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
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
    width: 330,
    height: 45,
    position: "absolute",
    top: 379,
    borderRadius: 2,

    backgroundColor: "#060000", // Màu nền của nút
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    // top: 498,
    // left: 29,
    // position: 'absolute',
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 23,
    color: "white", // Màu văn bản
    alignItems: "center",
  },
});
