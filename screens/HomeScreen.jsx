import React , {useState, useEffect, useCallback}from 'react'
import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native'
import TabBar from "../components/TabBar"
import Logo from '../components/Logo'
import NewsList from '../components/NewsList'
import {AntDesign} from '@expo/vector-icons'
import Icon from '../components/Icon'
import NewsSkeleton from '../components/NewsSkeleton'

import HomeHook from '../hooks/newsHook'


const HomeScreen = () => {
    const [ news, 
            homeViewData,
            onRefresh,
            refreshing,
            isLoading,
        ] = HomeHook()
    
    return (
        <SafeAreaView style={styles.container}>
            <TabBar>
        
            <TabBar.Item
                icon={require('./../assets/images/icons/search.png')}
                selectedIcon={require('./../assets/images/icons//search.png')}
                title="Tab1"
                screenBackgroundColor={{ backgroundColor: 'rgba(36,42,55,1)' }}
            >
                <View></View>
           </TabBar.Item>

            <TabBar.Item
               icon={require('./../assets/images/icons/home.png')}
               selectedIcon={require('./../assets/images/icons//home.png')}
               title="Tab2"
               screenBackgroundColor={{ backgroundColor: 'rgba(36,42,55,1)' }}
            >
                <View>
                    <View style={styles.headerContainer}>
                            <View style={styles.titleContainer}>
                                <Logo/>
                            </View>
                            
                            <View  style={styles.userIcon}>
                                <TouchableOpacity>
                                    <Icon icon={<AntDesign name="pluscircleo" size={30} color="white" style={styles.iconsPlane} /> }/>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.card}>
                        {!isLoading ? <NewsList result={homeViewData} onRefresh={onRefresh} refreshing={refreshing}/> :
                            <Text style={{color: 'white'}}>Loading</Text>  
                        }
                    </View>
              </View>
            
            </TabBar.Item>

            <TabBar.Item
               icon={require('./../assets/images/icons/tv.png')}
               selectedIcon={require('./../assets/images/icons/tv.png')}
                title="Tab3"
                screenBackgroundColor={{ backgroundColor: 'rgba(36,42,55,1)' }}
            >
              <View>
                <Text>page 3</Text>
              </View>
            </TabBar.Item>

          </TabBar>

        </SafeAreaView>

        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerContainer:{
        marginHorizontal:3,
        marginVertical:1,
        flexDirection:'row',
    },

    titleContainer:{
        justifyContent:'flex-start'
    },
    logo: {
        lineHeight: 41,
        color: "rgba(255,255,255,1)",
        fontSize: 34,
        letterSpacing: 0.4099999964237213,
        fontFamily: 'Billabong',
    },

    userIcon:{
       marginLeft:250,
       flexDirection:'row',
    },

    oval4: {
        height: 40,
        width: 40,
        backgroundColor: "transparent",
        borderColor: "transparent",
    },

    iconsPlane: {
        position: "absolute",
        left:5,
        top:5,
      },
    
    // rowFront: {
    //     alignItems: 'center',
    //     backgroundColor: '#CCC',
    //     borderBottomColor: 'black',
    //     borderBottomWidth: 1,
    //     justifyContent: 'center',
    //     height: 50,
    // },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },

    rectangle4: {
        height: 202,
        width: 345,
        borderRadius: 8,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
          height: 3,
          width: 0
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        backgroundColor: "rgba(36,42,55,1)"
      },
      card:{
          alignItems:'center',
          justifyContent:'center',
          marginTop:20
        },
        
})


export default HomeScreen
