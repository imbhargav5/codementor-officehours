import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView';
import {search} from './utils';



export class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			query : ''
		}
	}


	handleChange(e){
		
	}

	render(){
		const {list} = this.props;

		const {query} = this.state;
		return <div className="root">
			<header>
				<div className="container">
					<h2> React TDD </h2>
				</div>
			</header>
			<main>
				<div className="search">
					<div className="container">
						<input placeholder="Search..." className="input" type="text" onChange={(e)=>this.handleChange(e)} />	
					</div>
					
				</div>

				<div className="list">
					<div className="container">
						
					</div>
				</div>
				
				
			</main>
		</div>;
	}
}


export default App;

