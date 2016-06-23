import { shallow, mount } from 'enzyme';
import * as chai from 'chai';
import App from '../assets/js/index';

const {expect} = chai;


describe("App",function(){


	it("should render",function(){
			spy(App.prototype, 'render');
    		const wrapper = mount(<App />);
    		expect(App.prototype.render.calledOnce).to.equal(true);
	});


});



describe('Codementor OfficeHour App',function(){
	
	describe('Component Tests',function(){

		
		describe("Root Component",function(){

			it("should take props",function(){
	    		const wrapper = mount(<App foo="Codementor" />);
	    		expect(wrapper.prop('foo')).to.equal("Codementor");
			});

		});

		

	});

	describe('Util Tests',function(){

	});
	describe('Other Tests',function(){
		
		it('expects 1 to equal 1',function(){
			chai.expect(1).to.equal(1);
		});


	});
});

	


		
	




