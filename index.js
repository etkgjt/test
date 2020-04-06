/**
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import React from 'react';

import List from './Components/List';
import Counter from './Components/Counter';

import {name as appName} from './app.json';
const data = ['A','B','C','E'];
function App(){
    return(
        <View style = {{alignItems:'center',justifyContent:'center',flex:1}}>
            <List
            data = {data}
            render = {(item)=>{
                console.log(item);
                return (
                    <Text>
                        {item}
                    </Text>
                )
            }}
            />
            {/* <Counter>
        {({count})=><Text style = {{fontSize:30,fontWeight:'bold'}}>{count}</Text>}
            </Counter> */}
            {/* <Counter
                render = {(item)=><Text style = {{fontSize:30,fontWeight:'bold'}}>{item}</Text>}
            /> */}
        </View>
    )
}
AppRegistry.registerComponent(appName, () => App);
