import React from 'react';
import ReactDOM from 'react-dom';


export class App extends React.Component{
	render(){
		return <p>App</p>;
	}
}


ReactDOM.render(<App/>,document.getElementById("app"));