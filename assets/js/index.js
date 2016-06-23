import React from 'react';
import ReactDOM from 'react-dom';
import indian_cities from './indian_cities';
import ListView from './ListView';
import Pagination from './Pagination';
import {search} from './utils';



const _cities  = indian_cities.sort((a,b)=>{
	 return a.name < b.name  ? -1 : 1;
}).map(i=>i.name);

const pageSize = 10;

const totalResults = _cities.length;

export class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			query : ''
		}
	}

	componentDidMount(){

	}

	
	

	handleChange(e){
		this.setState({query: e.target.value});
	}

	render(){
		const cities = search(_cities,this.state.query);

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
						<input value={query} placeholder="Search..." className="input" type="text" onChange={(e)=>this.handleChange(e)} />	
					</div>
					
				</div>
				<div className="pagination">
					<div className="container">
						<Pagination />
					</div>
				</div>
				<div className="list">
					<div className="container">
						<ListView list={cities} />
					</div>
				</div>
				
				
			</main>
		</div>;
	}
}


export default App;

ReactDOM.render(<App />,document.getElementById("app"));