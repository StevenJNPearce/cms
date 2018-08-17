import React from 'react';
import { shallow, mount } from 'enzyme';
import Press from '@containers/Press/Press';
import { createMemoryHistory } from 'history';
import WithData from '@containers/Press';

interface Post {
  data: {
    title: string;
    author: string;
    published_at: string;
    article_link: string;
    thumbnail: string;
    slug: string;
  };
  content: string;
}

describe('<Press />', () => {
  let component = typeof Press;
  const posts: Post[] = [];
  const numPostsToTest = 28;

  // populate posts[]
  for (let i = 0; i < numPostsToTest; i++) {
    posts.push({
      data: {
        title: `post${i}`,
        author: `author${i}`,
        published_at: '2018-06-09T05:00:00-05:00',
        article_link: 'http://medium.com/',
        thumbnail: 'path/to/thumbnail',
        slug: '/slug'
      },
      content: 'The content.'
    });
  }

  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/press');

    component = shallow(
      <Press posts={posts} history={history} />
    );
  });

  it('should have the title "Press"', () => {
    const wrapper = mount(<Press />);
    expect(wrapper.find('.title').text()).toEqual('Press');
  });

  it('renders without crashing', () => {
    expect(component.exists());
  });

  it('unmounts without crashing', () => {
    component.unmount();
  });

  it('loads more posts', () => {
    const instance = component.instance();
    instance.onLoadMore();
    expect(component.state().page).toEqual(2);
  });

  it('should have 6 posts per page', () => {
    const instance = component.instance();
    expect(component.state().numPostsPerPage).toEqual(6);
  });
});

describe('With data', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <WithData />
    );
  });
});
