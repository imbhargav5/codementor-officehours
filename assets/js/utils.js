export const search = function(arr,query){
	return arr.filter(i=>i.includes(query));
}

export const paginate = function* ({totalResults,page_size,current_page}){
	yield current_page;
}