import React from 'react'
import { 
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    StyleSheet
} from 'react-native'
import { Ionicons,EvilIcons, MaterialIcons,AntDesign } from '@expo/vector-icons'; 

const ForgetScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.backgroundImage1}>
                <Image
                    source={require("../assets/images/reset.jpg")}
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

                <Text style={styles.welcomeBack}>Reset Password</Text>
               
                <View style={styles.emailContainer}>
                <MaterialIcons name="email" size={24} color="red" style={styles.emailIcon} />
                    <TextInput 
                        placeholder='Email'
                        style={styles.email} 
                        autoCapitalize='none'
                        autoCompleteType='off'
                        autoCorrect={false}
                    />
                </View>

                <View style={styles.login}>
                    <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
                        <View style={styles.loginBox}>
                        <Text style={styles.logInText}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>
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
    
  });

export default ForgetScreen
