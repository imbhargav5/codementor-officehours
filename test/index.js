import { mount } from 'enzyme';
import {expect} from 'chai';
import App from '../assets/js/App';
import ListView from '../assets/js/ListView';
import {search} from '../assets/js/utils';



describe('Codementor OfficeHour App',function(){
	
	describe('Component Tests',function(){
		
		describe('App Component',function(){
			let wrapper;

			beforeEach(function(){
				wrapper = mount(<App list={[]}/>);
			});

			it.skip('search input correctly sets the state of App Component on onChange event',function(){

			});

		});

		describe('ListView Component',function(){

			let wrapper;

			beforeEach(function(){
				wrapper = mount(<ListView list={[1,2,3,4]}/>);
			});

			
			it.skip('correctly renders the exact number of li elements as the size of the list ',function(){
				
			});

			
			it.skip('correctly sets the text to li elements',function(){
				
			});

			
			it.skip('shows no results div when there are no list items',function(){
				
			});





		});


	});

	describe('Util Tests',function(){
		describe('Search Util',function(){
			
			let list;
			beforeEach(function(){
				 list = ["codementor","github","stackoverflow","Facebook","Google"];
			});
			
			it('search util is defined',function(){
				expect(search).to.be.not.undefined;
			});

			it.skip('search util should filter a list correctly',function(){
				
			});

		});
	});
	
});

	


		
	




