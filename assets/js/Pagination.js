import React from 'react';

export default class Pagination extends React.Component{
	render(){
		const {pages,onClick} = this.props;
		const{next_page,page,prev_page} = pages
		const nextPageButton = next_page >= 0 ? <li onClick={()=>onClick(next_page)}>{next_page}</li> : <span/>;
		const prevPageButton = prev_page >=0? <li onClick={()=>onClick(prev_page)}>{prev_page}</li> : <span/>;
		const currentPageButton = <li onClick={()=>onClick(page)}>{page}</li>

		return <ul className="pagination">
			{prevPageButton}
			{currentPageButton}
			{nextPageButton}
		</ul>
	}
}

Pagination.propTypes = {
	pages : React.PropTypes.any.isRequired,
	onClick  : React.PropTypes.func.isRequired,
}