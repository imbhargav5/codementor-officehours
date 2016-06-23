import React from 'react';
import ReactDOM from 'react-dom';
import indian_cities from './indian_cities';
import ListView from './ListView';
import Pagination from './Pagination';

const cities  = indian_cities.sort((a,b)=>{
	 return a.name < b.name  ? -1 : 1;
});

const pageSize = 10;
const totalResults = cities.length;

export class App extends React.Component{
	constructor(props){
		super(props);
	}

	
	

	handleChange(e){

	}

	render(){
		const {cities} = this.props;
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
				<div className="pagination">
					<div className="container">
						<Pagination/>
					</div>
				</div>
				<div className="list">
					<div className="container">
						<ListView list={indian_cities.map(i=>i.name)} />
					</div>
				</div>
				
				
			</main>
		</div>;
	}
}

App.defaultProps = {
		cities : []
}
App.propTypes = {
		cities : React.PropTypes.array.isRequired 
}

export default App;

ReactDOM.render(<App cities={cities} />,document.getElementById("app"));