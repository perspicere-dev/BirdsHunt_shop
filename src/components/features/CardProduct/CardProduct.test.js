import React from 'react';
import { shallow } from 'enzyme';
import { CardProductComponent } from './CardProduct';

describe('Component CardProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<CardProductComponent />);
    expect(component).toBeTruthy();
  });
});
