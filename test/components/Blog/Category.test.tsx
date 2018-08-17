import React from 'react';
import { shallow, mount } from 'enzyme';
import Category from '@components/Blog/Category';

describe('<Category />', () => {
  it('renders without crashing', () => {
    const c = shallow(<Category cat={'Development'} />);
    expect(c.exists());
  });

  it('renders an div component', () => {
    const c = shallow(<Category cat={'Development'} />);
    expect(c.find('div').length).toEqual(1);
  });

  it('displays the category', () => {
    const cat = 'Development'
    const c = shallow(<Category cat={cat} />);
    expect(c.find('div').text()).toEqual(cat);
  });

  it("invokes onClick prop function on click", () => {
    const mockOnClick = jest.fn();
    const c = shallow(<Category cat={'Development'} onClick={mockOnClick} />);
    c.simulate('click');
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it("invokes deselect prop function on click", () => {
    const mockDeselect = jest.fn();
    const c = mount(<Category cat={'Development'} deselectCat={mockDeselect} selectedCat={'Development'} />);
    const close = c.find('div').at(2);

    close.simulate('click');
    expect(mockDeselect.mock.calls.length).toEqual(1);
  });
});
