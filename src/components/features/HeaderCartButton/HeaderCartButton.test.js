import React from 'react';
import { shallow } from 'enzyme';
import { HeaderCartButtonComponent } from './HeaderCartButton';

describe('Component HeaderCartButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<HeaderCartButtonComponent />);
    expect(component).toBeTruthy();
  });
});
