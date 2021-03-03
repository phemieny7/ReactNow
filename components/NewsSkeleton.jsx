import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SkeletonContent from 'react-native-skeleton-content';

const NewsSkeleton = () => {
    return (
        <View>
            <SkeletonContent
                containerStyle={{flex: 1, width: 300}}
                animationDirection="horizontalLeft"
                isLoading={true}
            />
        </View>
    )
}

export default NewsSkeleton

const styles = StyleSheet.create({})
