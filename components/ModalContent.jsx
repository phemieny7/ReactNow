import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal';

const ModalContent = (isModalvisble, result) => {
    return (
        <View>
           <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                <Text>{result.content}</Text>
                </View>
            </Modal>
        </View>
    )
}

export default ModalContent

const styles = StyleSheet.create({})
