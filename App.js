import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

// import { Checkbox } from "react-native-paper";
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
      <View style={styles.container1}>
        <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
        <Image
          source={require("./book.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon}
        />
        <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>

        <Text style={styles.text2}>141.800 đ</Text>

        <TouchableOpacity style={styles.button2} onPress={() => {}}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => {}}>
          <Text>+</Text>
        </TouchableOpacity>

        <Text style={styles.text3}>1</Text>

        <Text style={styles.text4}>Mua sau</Text>

        <Text style={styles.text5}>Mã giảm giá đã lưu</Text>

        <Text style={styles.text6}>Xem tại đây</Text>

        <TouchableOpacity style={styles.button4} onPress={() => {}}>
          <Text style={styles.buttonText}>Áp Dụng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button5} onPress={() => {}}>
          <View style={styles.mau}></View>
          <Text style={styles.buttonText1}>Mã Áp dụng</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text7}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={styles.text8}>Nhập tại đây?</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text9}>Tạm tính</Text>
        <Text style={styles.text10}>141.800 đ</Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.text11}>Thành tiền</Text>
        <Text style={styles.text12}>141.800 đ</Text>

        <TouchableOpacity style={styles.button6} onPress={() => {}}>
          <Text style={styles.buttonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.container2}>
        <Text style={styles.text}>PASSWORD GENERATOR</Text>
        <TextInput style={styles.textInput}></TextInput>

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
      <Checkbox>status={checked ? "checked" : "unchecked"}</Checkbox>
      
      <Checkbox></Checkbox> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    // color: "red",
    backgroundColor: "#C4C4C4",
    // alignItems: "center",
    // justifyContent: "center",
  },
  container1: {
    // flex: 1,
    // position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,

    backgroundColor: "#FFFFFF",
  },
  container2: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 71,
    top: 317,
    backgroundColor: "#FFFFFF",
  },
  container3: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 71,
    top: 450,
    backgroundColor: "#FFFFFF",
  },
  container4: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 120,
    bottom: 10,
    backgroundColor: "#FFFFFF",
  },
  icon: {
    position: "absolute",
    width: 104,
    height: 127,
    top: 14,
    left: 13,
  },
  mau: {
    position: "absolute",
    width: 32,
    height: 16,

    left: 26,
    color: "#F2DD1B",
    backgroundColor: "#F2DD1B",
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
    width: 191,
    height: 14,
    top: 14,
    left: 142,

    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: " #000000",
  },
  text3: {
    position: "absolute",
    // color: "#000000",
    width: 16,
    height: 16,
    top: 120,
    left: 167,

    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  text4: {
    position: "absolute",
    // color: "#000000",
    width: 46,
    height: 14,
    top: 125,
    left: 293,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: "#134FEC",
  },
  text5: {
    position: "absolute",
    // color: "#000000",
    width: 107,
    height: 14,
    top: 162,
    left: 13,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: " #000000",
  },
  text6: {
    position: "absolute",
    // color: "#000000",
    width: 64,
    height: 14,
    top: 162,
    left: 137,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: "#134FEC",
  },
  text7: {
    position: "absolute",
    // color: "#000000",
    width: 227,
    height: 14,
    // top: 312,
    left: 13,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    // color: "#134FEC",
  },
  text8: {
    position: "absolute",
    // color: "#000000",
    width: 227,
    height: 14,
    // top: 312,
    left: 245,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: "#134FEC",
  },
  text9: {
    position: "absolute",
    // color: "#000000",
    width: 227,
    height: 14,
    // top: 312,
    left: 13,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    // color: "#134FEC",
  },
  text10: {
    position: "absolute",
    width: 84,
    height: 21,
    // top: 67,
    left: 245,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: "red",
  },
  text11: {
    position: "absolute",
    // color: "#000000",
    width: 89,
    height: 21,
    top: 25,
    left: 13,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    // color: "#134FEC",
  },
  text12: {
    position: "absolute",
    width: 84,
    height: 21,
    top: 20,
    left: 245,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: "red",
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
    width: 138,
    height: 14,
    top: 42,
    left: 142,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 12, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 14, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    // textAlign: "center",
    color: " #000000",
  },
  text2: {
    position: "absolute",
    width: 84,
    height: 21,
    top: 67,
    left: 142,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 24, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự

    color: "red",
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
    width: 16,
    height: 16,
    position: "absolute",
    top: 124,
    left: 142,

    borderColor: "#1511EB",
    borderWidth: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  button3: {
    // position: 'relative',
    width: 16,
    height: 16,
    position: "absolute",
    top: 124,
    left: 187,
    borderColor: "#1511EB",
    borderWidth: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  button4: {
    // position: 'relative',
    width: 99,
    height: 45,
    position: "absolute",
    top: 211,
    left: 245,
    borderColor: "#1511EB",
    borderWidth: 1,
    backgroundColor: "#134FEC",
    alignItems: "center",
    justifyContent: "center",
  },
  button5: {
    // position: 'relative',
    width: 208,
    height: 45,
    position: "absolute",
    top: 211,
    left: 13,
    borderColor: "#1511EB",
    borderWidth: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  button6: {
    position: "absolute",
    width: 331,
    height: 45,
    position: "absolute",
    top: 60,
    backgroundColor: "#E53935",
    // borderColor: "#1511EB",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    // top: 498,
    // left: 29,
    position: "absolute",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
    color: "#ffffff", // Màu văn bản
    // backgroundColor: "#", // Màu nền của nút
    alignItems: "center",
  },
  buttonText1: {
    // top: 498,
    left: 67,
    position: "absolute",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
    // color: "#ffffff", // Màu văn bản
    // backgroundColor: "#", // Màu nền của nút
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkmark: {
    fontSize: 18,
    color: "black",
  },
});
