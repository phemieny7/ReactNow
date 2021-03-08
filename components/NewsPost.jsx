import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Button, Image } from 'react-native'
import { Avatar } from 'react-native-elements';
import Moment from 'moment'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font'
import Modal from 'react-native-modal'; 


export default function NewsPost({result,props}) {
    console.log(props);
    const [isModalVisible, setModalVisible] = useState(false);

        const [loaded] = useFonts({
            century: require('./../assets/fonts/century.otf'),
      });
      
      if (!loaded) {
        return null;
      }
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const texter = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by a`
    return (
        <View>
            <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.rectangle4}>
                    <View style={styles.avatar}> 
                            <Avatar
                                rounded
                                size="medium"
                                source={{
                                    uri: result.urlToImage,
                                }}
                            />
                    </View>
                    <Text style={styles.author}>{result.source.name}</Text>
                    <Text style={styles.time}>{Moment( result.publishedAt).fromNow()}</Text>
                    <Text style={styles.title}>
                            { result.title}
                        </Text>
                        <View style={styles.reactions}>
                            <View>
                                <Ionicons name='heart' color='coral' size={30}/>
                                <Text style={styles.likes}>33k</Text>
                            </View>
                            <View>
                                <FontAwesome name='microphone' color='white' size={30}/>
                                <Text style={styles.likes}>33k</Text>
                            </View>
                        
                            <FontAwesome name="eye" size={24} color="white" />
                        </View> 
                    </View>
            </TouchableWithoutFeedback>
            
            <Modal isVisible={isModalVisible} backdropOpacity={1}>
                <View style={styles.modal}>
                    <ScrollView>
                    <Image source={{
                                    uri: result.urlToImage,
                                }} style={{width: '100%', height: 200}} />
                    <Text style={styles.content}>{result.content} {texter} {texter}</Text>
                    </ScrollView>
                    <View style={styles.modalButton}>
                        <TouchableOpacity style={styles.loginBox}>
                            <Text style={styles.logInText}>ReactNow</Text>
                        </TouchableOpacity>
                        <View style={styles.close}>
                            <Button title="X" onPress={toggleModal}/>
                        </View>
                        
                    </View>
                    
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle4: {
        height: 202,
        borderRadius: 8,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
          height: 3,
          width: 0
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        backgroundColor: "rgba(36,42,55,1)",
        marginBottom: 10,
        flex:1
      },
    avatar:{
        left:10,
        top:5,
    },
    author:{
        backgroundColor: "transparent",
        lineHeight: 22,
        color: "rgba(255,255,255,1)",
        fontSize: 17,
        letterSpacing: -0.4099999964237213,
        position:'absolute',
        left:70,
        top: 10,
    },
    time:{
        backgroundColor: "transparent",
        lineHeight: 18,
        color: "rgba(78,88,110,1)",
        fontSize: 13,
        letterSpacing: -0.07999999821186066,
        left:70,
        position:'absolute',
        top:30,
    },
    title:{
        lineHeight: 20,
        color: "rgba(255,255,255,1)",
        fontSize: 15,
        letterSpacing: -0.24,
        marginTop: 14,
        marginLeft: 15
    },
    reactions:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'flex-end',
        top:160,
        width: '100%',
        position:'absolute'
    },
    likes:{
        color:'white',
        left: 30,
        bottom: 23
    },
    modal:{
        flex:1
    },
    content:{
        color: 'white',
        fontFamily: 'century',
        fontSize: 17,
        margin: 9,
        //lineHeight: 0.34
    },
    modalButton:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    loginBox: {
        margin:10,
        height: 40,
        width: '50%',
        borderRadius: 5,
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
    close:{
        marginTop: 19,
        
    }


    
    
})
