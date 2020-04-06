import React from 'react';
import {
Text,
View,

} from 'react-native';
export default function ({data,render}){
    return(
        <View>
            {data.map(render)}
        </View>
    )
}