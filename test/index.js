import { mount } from 'enzyme';
import * as chai from 'chai';
import App from '../assets/js/App';
import ListView from '../assets/js/ListView';
import {search,paginate} from '../assets/js/utils';

const {expect} = chai;


describe('Codementor OfficeHour App',function(){
	
	describe('Component Tests',function(){
		
		describe('App Component',function(){

			it('search input correctly sets the state of App Component on onChange event',function(){
				const wrapper = mount(<App list={[]}/>);
				wrapper.find('.search input').simulate('change',{target: { value : 'hello' }});
				expect(wrapper.state('query')).to.equal('hello');
			});

		});

		describe('ListView Component',function(){

			let wrapper;

			beforeEach(function(){
				wrapper = mount(<ListView list={[1,2,3,4]}/>);
			});

			it('renders list items with keys correctly',function(){
				expect(wrapper.find('li').at(0).key()).to.equal('0');
			});

			it('correctly renders li elements',function(){
				expect(wrapper.find('li')).to.have.length(4);
			});

			it('correctly sets the keys to li elements',function(){

			});

			it('correctly sets the text to li elements',function(){
				expect(wrapper.find('li').at(1).text()).to.equal('2');
			});

			it('has exactly one ul element',function(){
				expect(wrapper.find('ul')).to.have.length(1);
			});





		});


	});

	describe('Util Tests',function(){
		describe('Search Util',function(){
			

			it('search util is defined',function(){
				expect(search).to.not.be.undefined;
			});

			it('search util is case insenstive',function(){
				expect(search(["Hyderabad","New York"],"hyd")).to.have.lengthOf(1);
			});

		});
	});
	
});

	


		
	




