import React from 'react';
import { mount } from 'enzyme';
import CategorySelector from '@components/Blog/CategorySelector';
import Category from '@components/Blog/Category';

describe('<CategorySelector />', () => {
  const selectedCat = 'cat1';
  const categories = ['cat1', 'cat2', 'cat3', 'cat4'];
  function onSelectCat() { return 'success!'; }
  function deselectCat() { return 'success!'; }

  it('renders without crashing', () => {
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={onSelectCat} deselectCat={deselectCat} />);
    expect(c.exists());
  });

  it('renders 1 wrapper div', () => {
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={onSelectCat} deselectCat={deselectCat} />);
    expect(c.find('#root').at(0).length).toEqual(1);
  });

  it('renders the correct number of categories', () => {
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={onSelectCat} deselectCat={deselectCat} />);
    expect(c.find(Category).length).toEqual(categories.length)
  });
  
  it('invokes props.onSelectCat function when an unselected <Category /> is clicked', () => {
    const mockOnSelectCat = jest.fn();
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={mockOnSelectCat} />);

    const root = c.find('#root').at(0);

    const cat1 = root.childAt(3);
    const cat2 = root.childAt(4);
    const cat3 = root.childAt(5);

    cat1.simulate('click');
    cat2.simulate('click');
    cat3.simulate('click');

    expect(mockOnSelectCat.mock.calls.length).toEqual(2);
  });
});
