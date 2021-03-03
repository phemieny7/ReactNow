import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Button, Image } from 'react-native'
import { Avatar } from 'react-native-elements';
import Moment from 'moment'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal'; 


export default function NewsPost({result}) {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
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
            
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <Image source={{
                                    uri: result.urlToImage,
                                }} style={{width: '100%', height: 200}} />
                    <Text style={{color: 'white'}}>{result.content}!</Text>
                    <Button title="Hide modal" onPress={toggleModal} />
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

    modal: {
        marginTop: 30
    }
    
})
