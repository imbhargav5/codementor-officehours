import { mount } from 'enzyme';
import {expect} from 'chai';
import App from '../assets/js/index';
import ListView from '../assets/js/ListView';
import Pagination from '../assets/js/Pagination';



describe('String Array props',function(){
	it('Checks if a string exists in an array',function(){
			 expect("Samuel").to.be.oneOf(["Samuel","Ramsay","John"]);
	});

});

	describe('All components take props', function() {
		  var tests = [
		     {name : "App",component : App},
		     {name : "ListView",component : ListView},
		     {name : "Pagination",component : Pagination}
		  ];


		  tests.forEach(function(test) {

			    it(test.name + ' correctly takes foo as prop with value 10', function() {
			     	 const wrapper = mount(<test.component foo={10}/>);
			     	 expect(wrapper.prop("foo")).to.equal(10);
			    });

		  });

		});
