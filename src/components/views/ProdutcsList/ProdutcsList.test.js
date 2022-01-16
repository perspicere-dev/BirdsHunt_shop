import React from 'react';
import { shallow } from 'enzyme';
import { ProdutcsListComponent } from './ProdutcsList';

describe('Component ProdutcsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProdutcsListComponent />);
    expect(component).toBeTruthy();
  });
});
