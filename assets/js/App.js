import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView';
import {search,paginate} from './utils';
import Pagination from './Pagination';


export class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			query : '',
			page : 0
		}
	}


	handleChange(e){
		this.setState({query: e.target.value});
	}

	handlePageChange(page){
		this.setState({page});
	}

	render(){
		const {list} = this.props;
		const {page} = this.state;
		const page_size = 100;
		const pages = paginate({
			total_count : list.length,
			page,
			page_size
		});
		const filtered_list = search(list,this.state.query).slice(page*page_size,page*page_size+page_size);

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
						<input placeholder="Search..." className="input" type="text" 
							onChange={(e)=>this.handleChange(e)} />	
					</div>
					
				</div>

				<div className="">
					<div className="container">
						<Pagination onClick={(...args)=>this.handlePageChange(...args)} pages={pages}/>
					</div>
				</div>
				
				<div className="list">
					<div className="container">
						<ListView list={filtered_list}/>
					</div>
				</div>
				
				
			</main>
		</div>;
	}
}


export default App;

