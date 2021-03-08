import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GorgeousHeader from "react-native-gorgeous-header";
import { Ionicons, FontAwesome  } from '@expo/vector-icons'; 

const SearchHeader = () => {
    return (
        <View>
           <GorgeousHeader
                menuImageSource
                searchImageSource= {require('./../assets/images/icons//search.png')}
                profileImageSource={{
                uri:
                "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            }}
                title='Search'
                titleTextStyle = {styles.titleTextStle}
                subtitle="Follow the news as you want it"
                searchIcon
                
            />
        </View>
    )
}

export default SearchHeader

const styles = StyleSheet.create({
    titleTextStle:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
