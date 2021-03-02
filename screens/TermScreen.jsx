import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const TermScreen = () => {
    return (
        <SafeAreaView>
        <View>
            <Text style={styles.text}>Terms and condition</Text>
        </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
text:{
    fontSize:30
}
})


export default TermScreen
