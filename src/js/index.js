import React from "react";
import ReactDOM from "react-dom";
import Time from './components/time';
import Value from './components/value';

class Index extends React.Component {
	render() {
		return (
			<div>
				<Time/>
				<br />
				<Value/>
			</div>
		);
	}
}
ReactDOM.render(
	<Index/>, document.getElementById('example'));