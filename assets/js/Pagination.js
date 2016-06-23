import React from 'react';

//
//
//Accepts [{
//	pageNumber : 0,
//	text : "Previous"
//}]
export default class Pagination extends React.Component{
	render(){
		const {pageButtons, onClick} = this.props;
		const buttons = pageButtons ? pageButtons.map((i,index)=>{
			const {pageNumber, text} = i;
			return <li key={index} onClick={()=>onClick(pageNumber)}><button>{text}</button></li>
		}) : <li/>;
		return <ul className="pagination">
			{buttons}
		</ul>
	}
}

Pagination.propTypes = {
	pageButtons : React.PropTypes.array.isRequired,
	onClick : React.PropTypes.func.isRequired
}