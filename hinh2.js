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
      <Image
        source={require("./usb.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon}
      />

      <Text style={styles.text}>
        USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
        bluetooth
      </Text>
      <Text style={styles.text1}>Cực kỳ hài lòng</Text>
      <Image
        source={require("./Star 5.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon1}
      />
      <Image
        source={require("./Star 5.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon2}
      />
      <Image
        source={require("./Star 5.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon3}
      />
      <Image
        source={require("./Star 5.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon4}
      />
      <Image
        source={require("./Star 5.png")} // Đường dẫn đến biểu tượng của bạn
        style={styles.icon5}
      />
      <TouchableOpacity style={styles.button2} onPress={() => {}}>
        <Image
          source={require("./camera.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon6}
        />
        <Text style={styles.buttonText}>Thêm hình ảnh</Text>
      </TouchableOpacity>

      <TextInput
        style={[styles.textInput1]}
        placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
        multiline={true} // Cho phép nhập nhiều dòng
        numberOfLines={4} // Số dòng hiển thị ban đầu
        onChangeText={setPassword}
        placeholderTextColor="#C4C4C4"
        // value={Password}
      />

      <Text style={styles.text3}>https://meet.google.com/nsj-ojwi-xpp</Text>

      <TouchableOpacity style={styles.button3} onPress={() => {}}>
        <Text style={styles.buttonText1}>Gửi</Text>
      </TouchableOpacity>

      {/* <View style={[styles.textInput1, styles.placeholderStyle]}>
        <textarea
          rows="100%"
          cols="100%"
          // onChange={handleTextChange}
          placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
        />
      </View> */}

      {/* <Text style={styles.text1}>LOGIN</Text> */}

      {/* <View style={styles.inputContainer}>
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

      <Text style={styles.text2}>Forgot your password?</Text> */}

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
    backgroundColor: "#ffffff",
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
    position: "absolute",
    width: 70,
    height: 70,
    left: 16,
    top: 13,
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
  icon1: {
    position: "absolute",
    width: 39,
    height: 39,
    top: 183,
    left: 59,
    // marginRight: 7,
    // top: 1,
  },
  icon2: {
    position: "absolute",
    width: 39,
    height: 39,
    top: 183,
    left: 112,
    // marginRight: 7,
    // top: 1,
  },
  icon3: {
    position: "absolute",
    width: 39,
    height: 39,
    top: 183,
    left: 165,
    // marginRight: 7,
    // top: 1,
  },
  icon4: {
    position: "absolute",
    width: 39,
    height: 39,
    top: 183,
    left: 218,
    // marginRight: 7,
    // top: 1,
  },
  icon5: {
    position: "absolute",
    width: 39,
    height: 39,
    top: 183,
    left: 271,
  },
  icon6: {
    position: "absolute",
    width: 39,
    height: 32,
    // top: 268,
    left: 40,
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

  text: {
    position: "absolute",
    color: "#000000",
    width: 259,
    height: 21,
    top: 19,
    left: 96,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 16, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 19, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  text3: {
    position: "absolute",
    // color: "#000000",
    width: 205,
    height: 14,
    top: 540,
    left: 140,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  textInput1: {
    paddingLeft: 15,
    paddingTop: 15,
    position: "absolute",
    width: 293,
    height: 222,
    top: 335,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    borderWidth: 1,
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
    width: 259,
    height: 21,
    top: 144,
    left: 51,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
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
    width: 289,
    height: 46,
    position: "absolute",
    top: 590,
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

    alignItems: "center",
  },
  buttonText1: {
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
});
