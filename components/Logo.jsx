import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

const Logo = () => {
    const [loaded] = useFonts({
        Billabong: require('./../assets/fonts/Billabong.ttf'),
      });
      
      if (!loaded) {
        return null;
      }
    return (
        <View>
            <Text style={styles.logo}>ReactNow</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        lineHeight: 41,
        color: "rgba(255,255,255,1)",
        fontSize: 34,
        letterSpacing: 0.4099999964237213,
        fontFamily: 'Billabong',
    },
})
