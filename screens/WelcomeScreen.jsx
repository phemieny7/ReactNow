import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const WelcomeScreen =({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backgroundImage1}>
          <Image
            source={require("../assets/images/bg.jpg")}
            style={styles.backgroundImage}
          ></Image>
        </View>
        <ImageBackground
          style={styles.bgCopy}
          imageStyle={styles.bgCopy_imageStyle}
          source={require("../assets/images/gradient.png")}
        >
            {/* welcome Text component */}
            <View style={styles.welcome}>
                <Text style={styles.findNewFriendsNea}>Share, Contribute, ReactNow</Text>
                <Text style={styles.withMilionsOfUser}>
                    With lots of events happening around you, we give you the platform to be a local news sharer and news reader.
                </Text>
            </View>
            {/* Welcome Text Ends Here */}

            {/* Login and Sign Up Component starts Here */}
            <View style={styles.login}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.loginBox}>
                    <Text style={styles.logInText}>Log In</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.signUp}>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <View style={styles.signUpBox}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styles.orLogInWithText}>Or log in with</Text>

            <View style={styles.orLoginWithBox }>
              <TouchableOpacity style={styles.google}>
                  <Text>
                      <AntDesign name="google" size={24} color="#db4a39" />
                  </Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.facebook}>
                  <Text>
                      <AntDesign name="facebook-square" size={24} color="#3b5998" />
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.twitter}>
                  <Text>
                      <AntDesign name="twitter" size={24} color="#00acee" />
                  </Text>
              </TouchableOpacity>
            </View>
           
            {/* Login and Sign Up bottons Ends Here */}
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode:'cover',
  },
  bgCopy: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 'auto',
    right: 0
  },
  bgCopy_imageStyle: {
    height: 800
  },
  welcome:{
      justifyContent:'center',
       marginHorizontal: 30,
      marginTop: 220,

  },
  findNewFriendsNea: {
    lineHeight: 50,
    color: "rgba(255,255,255,1)",
    fontSize: 44,
    letterSpacing: -0.7040002,
    
  },
  withMilionsOfUser: {
    lineHeight: 22,
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    letterSpacing: -0.4099999964237213,
    marginTop: 8,
  },

  login:{
    alignItems: 'center',
    marginTop: 20
  },

  loginBox: {
    height: 40,
    width: 350,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,1)"
  },

  logInText: {
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(255,45,85,1)",
    fontSize: 15,
    letterSpacing: -0.24,
    marginTop: 9,
  },

    signUp:{
    alignItems: 'center',
    marginTop: 20
  },

  signUpBox: {
    height: 40,
    width: 350,
    borderRadius: 22,
    backgroundColor: "red",
    opacity:0.7
  },

  signUpText: {
    lineHeight: 20,
    textAlign: "center",
    color: "white",
    fontSize: 15,
    letterSpacing: -0.24,
    marginTop: 9,
  },
  orLogInWithText: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "white",
    fontSize: 13,
    letterSpacing: -0.07999999821186066,
    marginTop: 9,
  },
  orLoginWithBox:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:30,
  },
  google:{
      marginLeft: 0
  },
  facebook:{
    marginLeft: 15
  },

  twitter:{
    marginLeft: 15
  }





  

});

export default WelcomeScreen;