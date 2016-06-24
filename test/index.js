import { mount } from 'enzyme';
import {expect} from 'chai';
import App from '../assets/js/App';
import ListView from '../assets/js/ListView';
import {search,paginate} from '../assets/js/utils';



describe('Codementor OfficeHour App',function(){
	
	describe('Component Tests',function(){


		
		describe('App Component',function(){
			let wrapper;

			beforeEach(function(){
				wrapper = mount(<App list={[]}/>);
			});

			it('search input correctly sets the state of App Component on onChange event',function(){
				wrapper.find(".search input").simulate('change',{ target : { value : 'hello'} });
				expect(wrapper.state().query).to.equal("hello");
			});

		});

		describe('ListView Component',function(){

			let wrapper;

			beforeEach(function(){
				wrapper = mount(<ListView list={[1,2,3,4]}/>);
			});

			
			it('correctly renders the exact number of li elements as the size of the list ',function(){
				 expect(wrapper.find('li')).to.have.lengthOf(4);
			});

			
			it('correctly sets the text to li elements',function(){
				  expect(wrapper.find('li').at(0).text()).to.equal("1");
			});

			
			it('shows no results div when there are no list items',function(){
				  let myWrapper = mount(<ListView list={[]}/>);
				  expect(myWrapper.find('.no-results')).to.have.length(1);
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

			it('search util should filter a list correctly',function(){
				expect(search(list,'code')).to.have.lengthOf(1);
			});


			it('search util should filter a list correctly in a case insensitive fashion',function(){
				expect(search(list,'go')).to.have.lengthOf(1);
			});

		});
	});



	describe('Our First integration test',function(){
		it('change event happens, the list view correctly gets the list prop',function(){
			const list = ["codementor","github","stackoverflow","Facebook","Google"];
			const wrapper = mount(<App list={list} />);

			wrapper.find('.search input').simulate('change',{ target : { value : "code"}});
			expect(wrapper.find(ListView).find('li')).to.have.lengthOf(1);

		});
	});



	describe('Pagination utility',function(){
		it('is defined',function(){
			expect(paginate).to.be.not.undefined;
		});


		describe("when page_size is 10 and total_results is 100, current_page is 5, it correctly display",function(){
			it('runs',function(){
				let options = {
					total_count : 90,
					page_size : 10,
					page : 5
				};
				expect(paginate(options)).to.be.eql({
					 next_page : 6,
					 prev_page : 4,
					 page : 5
				});
			});
		
		});

		describe("when page_size is 10 and total_results is 100, current_page is 0, it correctly display",function(){
			it('runs',function(){
				let options = {
					total_count : 90,
					page_size : 10,
					page : 0
				};
				expect(paginate(options)).to.be.eql({
					 next_page : 1,
					 prev_page : -1,
					 page : 0
				});
			});
		
		});

		describe("when page_size is 10 and total_results is 91, current_page is 9, it correctly display",function(){
			it('runs',function(){
				let options = {
					total_count : 91,
					page_size : 10,
					page : 9
				};
				expect(paginate(options)).to.be.eql({
					 next_page : -1,
					 prev_page : 8,
					 page : 9
				});
			});
		
		});

		
	});
	
});

	


		
	




