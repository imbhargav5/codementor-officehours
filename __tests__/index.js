import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import {App} from '../assets/js/index';

describe("App",function(){
	it("should render",function(){
			spy(App.prototype, 'render');
    		const wrapper = mount(<App />);
    		expect(App.prototype.render.calledOnce).to.equal(true);
	});
});