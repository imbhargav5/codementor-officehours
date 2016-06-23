import React from 'react';

export default class ListView extends React.Component{
	render(){
		const {list} = this.props;
		const listItems = list.map((item,index)=><li key={index}>{item}</li>);
		return <ul className="list-view">
			{listItems}
		</ul>
	}
}

ListView.propTypes = {
	list : React.PropTypes.array.isRequired
}

ListView.defaultProps = {
	list : []
}