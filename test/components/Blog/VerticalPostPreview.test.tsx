import React from 'react'
import Moment from 'react-moment'
import { mount, shallow, ShallowWrapper } from 'enzyme'
import VerticalPostPreview from '@components/Blog/VerticalPostPreview'
import { cropContent } from '@helpers/cropContent'
import { MemoryRouter as Router } from 'react-router-dom' // 4.0.0
import { createBrowserHistory } from 'history';

describe('<VerticalPostPreview />', () => {
  const samplePost = {
    data: {
      title: 'The Title',
      author: 'Mary Jane',
      category: 'Development',
      published_at: '2018-06-09T05:00:00-05:00',
      thumbnail: 'path/to/thumbnail',
      slug: 'slug',
      readtime: 5,
    },
    content: 'The content.',
  }

  let verticalPostPreview: ShallowWrapper;
  const spy = jest.spyOn(VerticalPostPreview.prototype, 'goto');
  const mockOnClick = jest.fn();

  beforeEach(() => {
    const history = createBrowserHistory();
    verticalPostPreview = shallow(<VerticalPostPreview post={samplePost} onClick={mockOnClick} history={history} />);
  });

  it("invokes onClick prop function on click", () => {
    const history = createBrowserHistory();
    const c = mount(<VerticalPostPreview post={samplePost} onClick={mockOnClick} history={history} />);
    const root = c.find('#root').at(0);

    root.simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('goes to post when goto is called', () => {
    const history = createBrowserHistory(samplePost.data.slug);
    const c = mount(<VerticalPostPreview post={samplePost} history={history} />);
    const instance = c.instance();

    instance.goto();

    expect(instance.props.history.length).toBe(3);
  });


  it('renders without crashing', () => {
    expect(verticalPostPreview.exists());
  });

  it('renders a root element', () => {
    const root = verticalPostPreview.find('#root');
    expect(root.length).toEqual(1);
  });

  it('it calls goto when clicked', () => {
    const history = createBrowserHistory(samplePost.data.slug);
    const c = mount(<VerticalPostPreview post={samplePost} history={history} />);
    const instance = c.instance();

    instance.goto();

    expect(instance.props.history.length).toBe(4);
  });

  it('renders nothing if post prop is undefined', () => {
    const c = shallow(<Router><VerticalPostPreview post={undefined}/></Router>);
    expect(c.render().text()).toEqual('');
  });

  it('renders the publish date', () => {
    const m = mount(<Moment format={'MMMM Do, YYYY'}>{samplePost.data.published_at}</Moment>)
    const publishDateC = verticalPostPreview.children().find(Moment)
    expect(publishDateC.render().text()).toEqual(m.render().text())
  })

  it('renders the thumbnail', () => {
    const img = verticalPostPreview.find('#postImage');
    expect(img.props().src).toEqual(samplePost.data.thumbnail);
  });

  /*it('wrapps component with the link to the post', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    const linkC = c.childAt(0).children().find('a')
    expect(linkC.prop('href')).toEqual(`/blog/post/${samplePost.data.slug}`)
  })*/

  it('renders the category', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    expect(c.render().text()).toContain(samplePost.data.category.toUpperCase())
  })

  it('renders the post title', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    expect(c.render().text()).toContain(samplePost.data.title)
  })

  it('renders content preview and does not crop content, if it is shorter than crop length is provided', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    expect(c.render().text()).toContain(cropContent(samplePost.content))
  })

  const longContent =
    'The content. goes on forever and never ever stops and will it crop it or not noone knows keep on going and going and going go go og'

  it('crops content correctly with no crop length provided', () => {
    expect(cropContent(longContent)).toBe(
      'The content. goes on forever and never ever stops and will it crop it or not noone knows keep on'
    )
  })

  it('crops content correctly with by amount of crop length provided', () => {
    expect(cropContent(longContent, 2)).toBe('The content.')
  })

  it('if content undefined, retuns backup phrase', () => {
    expect(cropContent(undefined)).toBe('Coming soon')
  })
})
