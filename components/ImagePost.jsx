import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const ImagePost = ({id, image, author, time, title }) => {
    return (
``
        <View>
           
        </View>
  
    )
}


const styles = StyleSheet.create({
    avatar:{
        left:10,
        top:5,
        flex:1
    },
    reported:{
        color: "rgba(255,255,255,1)",
        fontSize: 17,
        letterSpacing: -0.4099999964237213,
        left: 70,
        top:10
    },
    time:{
        lineHeight: 18,
        color: "rgba(78,88,110,1)",
        fontSize: 13,
        letterSpacing: -0.07999999821186066,
        left: 70,
        top: 5,
    },
    ifYouAreAnInfreq: {
        flexWrap:'wrap',
        backgroundColor: "transparent",
        lineHeight: 20,
        color: "rgba(255,255,255,1)",
        fontSize: 15,
        letterSpacing: -0.24,
        marginTop: 20,
        marginLeft: 20
      },
});

export default ImagePost


