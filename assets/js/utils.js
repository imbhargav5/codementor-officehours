export const search = function(arr,query){
	return arr.filter(i=>i.toLowerCase().includes(query.toLowerCase()));
}

export const paginate = function({total_count, page,page_size}){
	let next_page, prev_page;
	const max_pages = Math.ceil(total_count/page_size) - 1;
	next_page = page + 1;
	prev_page = page - 1;
	
	if(page<=0){
		prev_page = -1	
	}
	if(page>=max_pages){
		next_page = -1;
	}

	console.log(page,max_pages);
	return {
		prev_page,
		next_page,
		page
	};
}

