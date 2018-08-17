import React from 'react'
import { shallow, mount } from 'enzyme'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import BlogPost from '@containers/BlogPost/BlogPost'
import VerticalPostPreview from '@components/Blog/VerticalPostPreview'
import WithData from '@containers/BlogPost/index';
import Subscribe from '@components/Blog/Subscribe';
import SocialLinks from '@components/Blog/SocialLinks';

describe('<BlogPost />', () => {
  let component = typeof BlogPost
  let samplePost = {
    data: {
      title: 'Post Title',
      author: 'Mary Jane',
      category: 'The Category',
      published_at: '2018-06-09T05:00:00-05:00',
      thumbnail: 'path/to/thumbnail',
      slug: '/slug',
      readtime: 5,
    },
    content: 'The content.',
  }

  let sampleData = {
    posts: [
      {
        data: {
          author: "Brady Cheredone",
          category: "Crash Courses",
          published_at:"2018-06-10T02:34:00-05:00",
          readtime: 2,
          slug:"sample-post-4",
          thumbnail:"/uploads/unadjustednonraw_thumb_749.jpg",
          title:"Sample Post 4",
        }
      },
      {
        data: {
          author: "Brady Cheredone",
          category: "Crash Courses",
          published_at:"2018-06-10T02:34:00-05:00",
          readtime: 2,
          slug:"sample-post-4",
          thumbnail:"/uploads/unadjustednonraw_thumb_749.jpg",
          title:"Sample Post 4",
        }
      },
    ]
  }


  beforeEach(() => {
    component = shallow(<BlogPost post={samplePost} blogData={sampleData}/>)
  })

  it('renders without crashing', () => {
    expect(component.exists())
  })

  it('renders a <VerticalPostPreview />', () => {
    expect(component.find(VerticalPostPreview).length).toEqual(2)
  })

  it('renders BlogImage', () => {
    const image = component.find('#mainImage').props()
    expect(image.src).toEqual(samplePost.data.thumbnail);
    expect(image.alt).toEqual(samplePost.data.title);
  });

  it('renders category', () => {
    expect(component.find('.category').render().text()).toContain(samplePost.data.category.toUpperCase())
  })

  it('renders title', () => {
    expect(component.find('.titled').render().text()).toContain(samplePost.data.title)
  })

  it('renders readtime', () => {
    expect(component.find('.readtime').render().text()).toContain(`Reading time: ${samplePost.data.readtime} minutes`)
  })

  it('renders the publish date', () => {
    const m = mount(<Moment format={'MMMM Do, YYYY'}>{samplePost.data.published_at}</Moment>)
    const publishDateC = component.children().find(Moment)
    expect(publishDateC.render().text()).toEqual(m.render().text())
  })

  it('renders the social buttons', () => {
    expect(component.find(SocialLinks).length).toEqual(1)
  })

  it('renders the markdown content', () => {
    let markdown = component.find(Markdown)
    expect(markdown.props().source).toEqual(samplePost.content)
  })

  it('renders Telegram button', () => {
    expect(component.find('.btntelegram').length).toEqual(1)
  })

  it('renders a Subscribe button', () => {
    expect(component.find(Subscribe).length).toEqual(1)
  })

  it('renders Readers also enjoy block', () => {
    expect(component.find('.readersenjoy').render().text()).toContain(`Readers also enjoyed`)
  })

})

describe('With data', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <WithData />
    );
  })
})
