import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import HeaderLogo from '../HeaderLogo';

configure({ adapter: new Adapter() });

describe('header logo', () => {
    const headerLogo = shallow(<HeaderLogo />);

    it('header-logo renders without crashing', () => {
        shallow(<HeaderLogo />);
    });

    it('header-logo render span text without crashing', () => {
        expect(headerLogo.find('Link .navbar-brand').exists()).toBe(true);
        expect(headerLogo.find('Link .navbar-brand').text()).toBe('To-Do List');
    });
});
