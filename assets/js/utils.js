export const search = function(arr,query){
	return arr.filter(i=>i.toLowerCase().includes(query.toLowerCase()));
}

