import { mount } from 'enzyme';
import {expect} from 'chai';
import App from '../assets/js/App';
import ListView from '../assets/js/ListView';



// describe.skip('String Array props',function(){
// 	it('Checks if a string exists in an array',function(){
// 			 expect("Samuel").to.be.oneOf(["Samuel","Ramsay","John"]);
// 	});

// });

// describe('All components take props', function() {
// 	  var tests = [
// 	     {name : "App",component : App},
// 	     {name : "ListView",component : ListView},
// 	  ];


// 	  tests.forEach(function(test) {

// 		    it(test.name + ' correctly takes foo as prop with value 10', function() {
// 		     	 const wrapper = mount(<test.component foo={10}/>);
// 		     	 expect(wrapper.prop("foo")).to.equal(10);
// 		    });

// 	  });

// });


// describe('Integration Test',function(){
// 		let wrapper;
// 		let list;
		
// 		describe('query is "yo"',function(){
// 			beforeEach(function(){
// 				list = ["Hyderabad","New York","Delhi","San Fransisco"];
// 				wrapper =  mount(<App list={list}/>);
// 				wrapper.find('.search input').simulate('change',{target: { value : 'yo' }});
// 			});

// 			it('expect query to be "yo"',function(){
// 				expect(wrapper.state('query')).to.equal('yo');
// 			});

// 			it('expect list to have one item ',function(){
// 				expect(wrapper.find(ListView).prop('list')).to.have.lengthOf(1);
// 			});
// 		});


// 		describe('query is "xar"',function(){
// 			beforeEach(function(){
// 				list = ["Hyderabad","New York","Delhi","San Fransisco"];
// 				wrapper =  mount(<App list={list}/>);
// 				wrapper.find('.search input').simulate('change',{target: { value : 'xar' }});
// 			});

// 			it('expect query to be "xar"',function(){
// 				expect(wrapper.state('query')).to.equal('xar');
// 			});

// 			it('expect list to have one item ',function(){
// 				expect(wrapper.find(ListView).prop('list')).to.have.lengthOf(0);
// 			});
// 		});
		
		

// 	});
