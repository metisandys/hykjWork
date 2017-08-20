import React from "react";
import ReactDOM from "react-dom";


export default class Value extends React.Component{
	constructor() {
		super(); //调用基类的所有的初始化方法
		this.state = {
			timeValue: 'hhhh'
		}; //初始化赋值
	};
	handleValueChange(event) {
		this.setState({timeValue: event.target.value});
	};
	render(){
	  return (
	    <header>
	      <h1 onChange={this.handleValueChange}>{this.state.timeValue}</h1>
	    </header>
	  )
	}
}