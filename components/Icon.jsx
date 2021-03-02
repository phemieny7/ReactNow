import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Path, Stop, Defs, LinearGradient } from "react-native-svg"

const Icon = ({icon}) => {
    return (
        <View>
           <Svg viewBox="0 0 57 57" style={styles.oval4}>
                <Defs>
                    <LinearGradient id="nfgI4R" x1="78%" x2="15%" y1="12%" y2="88%">
                        <Stop offset="0.00" stopColor="rgba(247,131,97,1)" />
                        <Stop offset="1.00" stopColor="rgba(245,75,100,1)" />
                    </LinearGradient>
                </Defs>
                 <Path
                    strokeWidth={0}
                    fill="url(#nfgI4R)"
                    d="M28.50 57.00 C44.24 57.00 57.00 44.24 57.00 28.50 C57.00 12.76 44.24 0.00 28.50 0.00 C12.76 0.00 0.00 12.76 0.00 28.50 C0.00 44.24 12.76 57.00 28.50 57.00 Z"
                 ></Path>
            </Svg>
            {icon}
        </View>
    )
}

export default Icon

const styles = StyleSheet.create({
    oval4: {
        height: 40,
        width: 40,
        backgroundColor: "transparent",
        borderColor: "transparent",
    },
})
