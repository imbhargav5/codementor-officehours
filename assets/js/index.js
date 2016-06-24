import React from 'react';
import ReactDOM from 'react-dom';
import cities from './indian_cities';
import App from './App';



export class Root extends React.Component{

	constructor(...args){
		super(...args);
	}
	render(){
		return <App list={cities}/>
	}

}


export default Root;

ReactDOM.render(<Root />,document.getElementById("app"));