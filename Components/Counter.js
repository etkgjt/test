import React, { version } from 'react';
import {
Text,
View,

} from 'react-native';
export default class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count :0
        }
    }
    render(){
        return (
        <View>{this.props.children(this.state)}</View>
        )
    }
    componentDidMount(){
         this.id = setInterval(()=>{
            this.setState({count:++this.state.count})
        },1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.id);
    }
}