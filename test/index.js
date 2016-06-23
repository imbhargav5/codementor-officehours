import { mount } from 'enzyme';
import * as chai from 'chai';
import App from '../assets/js/index';
import ListView from '../assets/js/ListView';
import Pagination from '../assets/js/Pagination';
import {search,paginate} from '../assets/js/utils';

const {expect} = chai;



//App component 
//		 - it should take an items(array) as prop
//		 - it should handle if the items array is not passed (default Props)
//		 
//		 
// Pagination util
// 		 - it should return first and last pages
// 		 - it should return prev and next page if page size is 
// Search util
// 		 - it filters an array when the query is contained anywhere in the member strings
// 		 - it filters an array in a case insensitive fashion






describe('Codementor OfficeHour App',function(){
	
	describe('Component Tests',function(){
		
	
		

	});

	describe('Util Tests',function(){

	});
	describe('Other Tests',function(){


		it('paginate util is defined',function(){
			expect(paginate).to.not.be.undefined;
		});


		it('search util is defined',function(){
			expect(search).to.not.be.undefined;
		});

		

	});
});

	


		
	




