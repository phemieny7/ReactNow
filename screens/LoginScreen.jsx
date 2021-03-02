import React from 'react'
import {  StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Button
} from 'react-native'
import { Ionicons,EvilIcons, MaterialIcons } from '@expo/vector-icons'; 

const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.backgroundImage1}>
                <Image
                    source={require("../assets/images/login.jpg")}
                    style={styles.backgroundImage}
                ></Image>
                </View>
                <ImageBackground
                style={styles.bgCopy}
                imageStyle={styles.bgCopy_imageStyle}
                source={require("../assets/images/gradient.png")}
                >
                
                <View style={styles.arrowBack}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                        <Ionicons name="arrow-back" size={24} color="red" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.welcomeBack}>Welcome back</Text>
                <Text style={styles.loginToYourAccoun}>Login to your account</Text>
                <View style={styles.emailContainer}>
                <MaterialIcons name="email" size={24} color="red" style={styles.emailIcon} />
                    <TextInput 
                        placeholder='email'
                        style={styles.email} 
                        autoCapitalize='none'
                        autoCompleteType='off'
                        autoCorrect={false}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <EvilIcons name="eye" size={34} color="red" style={styles.passwordIcon} />
                    <TextInput 
                        placeholder='Password'
                        style={styles.password} 
                        autoCapitalize='none'
                        autoCompleteType='off'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>

            <View style={styles.login}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.loginBox}>
                    <Text style={styles.logInText}>Log In</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.forgetPassword}>
                <Button color="white" title='Forget your Password'  onPress={()=>{navigation.navigate('Forget')}}/>
            </View>

                </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "contain",
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
    arrowBack: {
        height: 28,
        width: 28,
        backgroundColor: "transparent",
        marginTop: 52,
        marginLeft: 15
    },
    welcomeBack: {
        backgroundColor: "transparent",
        lineHeight: 40,
        color: "rgba(255,255,255,1)",
        fontSize: 34,
        letterSpacing: 0.6071429,
        marginTop: 28,
        marginLeft: 30
    },
    loginToYourAccoun: {
        backgroundColor: "transparent",
        lineHeight: 22,
        alignContent: 'flex-start',
        color: "rgba(255,255,255,1)",
        fontSize: 17,
        letterSpacing: -0.4099999964237213,
        marginTop: 10,
        marginLeft: 30,
      },
    emailContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        opacity:0.7,
        height:44,
        borderRadius:22,
        width:350,
        marginTop: 57,
        alignSelf:'center'
    },
    emailIcon:{
        marginTop: 10,
        marginLeft: 10,
    },
    email:{
        flex:1,
        color:'red',
        alignItems:'center',
        marginLeft:10,
        fontSize:18
    },

    passwordContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        opacity:0.7,
        height:44,
        borderRadius:22,
        width:350,
        marginTop: 20,
        alignSelf:'center'
    },
    passwordIcon:{
        marginTop: 10,
        marginLeft: 10,
    },
    password:{
        flex:1,
        color:'red',
        alignItems:'center',
        marginLeft:5,
        fontSize:18
    },

    login:{
        alignItems: 'center',
        marginTop: 20
      },
    
    loginBox: {
        height: 40,
        width: 350,
        borderRadius: 22,
        backgroundColor: "red"
    },
    
    logInText: {
        lineHeight: 20,
        textAlign: "center",
        color: "rgba(255,255,255,1)",
        fontSize: 15,
        letterSpacing: -0.24,
        marginTop: 9,
    },

    forgetPassword:{
        marginTop: 40,
    }

   
  
  });

export default LoginScreen
