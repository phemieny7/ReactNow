import React from 'react'
import { View, Text, TouchableWithoutFeedback,RefreshControl,StyleSheet,TouchableOpacity} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import NewsPost from './NewsPost'

const NewsList = ({result,refreshing,onRefresh}) => {
    return (
        <View>
                <SwipeListView
                    keyExtractor={result => result.title}
                    data={result}
                    initialNumToRender={40}
                    renderItem={({item})=>{
                    return  <NewsPost result={item} />     
                    }}  
                    renderHiddenItem={ (item) => (
                    <View style={styles.rowBack}>
                            <Text style={{color:'white'}}>Read</Text>
                            <Text style={{color:'white'}} >delete</Text>
                    </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                        tintColor='floralwhite'
                                        />
                                    }
                                    
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    rowBack: {
        alignItems: 'center',
        //backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    
    
})

export default NewsList
