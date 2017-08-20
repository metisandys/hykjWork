import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import moment from 'moment';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
		const result = [];
		for (let i = start; i < end; i++) {
		result.push(i);
		}
		return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current.valueOf() < Date.now();
}
export default class Time extends React.Component{
	
	render(){
		return (
			<div>
			    <DatePicker
			      format="YYYY-MM-DD"
			      disabledDate={disabledDate}
			    />
			    <br />
			    <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
			    <br />
			    <RangePicker
			      disabledDate={disabledDate}
			      format="YYYY-MM-DD"
			    />
		  	</div>
		)
	}
}

