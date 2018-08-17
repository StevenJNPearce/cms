import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { History } from 'history';
import posed, { PoseGroup } from 'react-pose';
import { device } from '@src/breakpoints';

import CategorySelector from '@components/Blog/CategorySelector';
import Follow from '@components/Blog/Follow';
import PostPreview from '@components/Blog/PostPreview';
import RecentTweets from '@components/Blog/RecentTweets';
import Subscribe from '@components/Blog/Subscribe';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PostContainer = styled(
  posed.div({
    enter: {
      y: '0%'
    },
    exit: {
      y: '10%'
    }
  })
)`
  display: flex;
  flex-grow: 0;
  width: 50%;

  @media ${device.mobileS} and (max-width: 767px) {
    width: 100%;
  }
`;

const RootWrap = styled.div`
  > #root {
    background: #eeeeee;
    display: block;

    #header {
      width: 100%;
      height: 361px;
      background: #181e26;

      #headerTitle {
        color: #ffffff;
        font-size: 48px;
        font-weight: bold;
        text-align: center;
      }

      #headerSubtitle {
        color: #ffffff;
        font-size: 22px;
        text-align: center;
      }
    }

    #gridContainer {
      max-width: 100%;
      margin: 0 auto;
      width: 1180px;
      padding: 24px;

      #blogs {
        margin-top: -154px;
      }
    }

    #row {
      margin-top: 24px;
    }

    #subtitle {
      color: #646469;
      font-size: 14px;
      line-heigh: 20px;
      margin-top: 10px;
    }

    .load-more-button {
      display: block;
      font-size: 20px;
      margin: 100px auto;
      padding: 0 65px;
      text-align: center;
    }
  }
`;

const isClient = typeof window !== 'undefined';

const parseCategory = (category: string) => {
  return category.replace(/\s+/g, '-').toLowerCase();
};

interface BlogProps {
  posts: Post[];
  categories: string[];
  history: History;
}

interface BlogState {
  numPostsPerPage: number;
  posts: Post[];
  selectedCat: string;
  page: number;
}

interface Post {
  data: {
    title: string;
    author: string;
    category: string;
    published_at: number;
    thumbnail: string;

    slug: string;
    readtime: number;
  };
  content: string;
}

class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {
      numPostsPerPage: 5,
      page: 1,
      posts: [],
      selectedCat: 'All'
    };
  }

  componentDidMount() {
    const { categories, history, posts } = this.props;

    this.setState({ posts });

    if (history.location.search) {
      const params = new URLSearchParams(history.location.search.toString());
      const category = params.get('category');

      if (category) {
        categories.map(c => {
          if (category === parseCategory(c)) {
            this.onSelectCat(c);
          }
        });
      }
    }
  }

  onSelectCat = (selectedCat: string) => {
    if (selectedCat === 'All') {
      this.props.history.push('/blog');
    } else {
      this.props.history.push(`/blog?category=${parseCategory(selectedCat)}`);
    }

    this.setState({ selectedCat });
  }

  deselectCat = () => {
    this.props.history.push('/blog');
    this.setState({ selectedCat: 'All' });
  }

  onLoadMore = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  renderCategorySelector(shouldRender: boolean) {
    if (!shouldRender) {
      return;
    }

    const { categories } = this.props;
    const { selectedCat } = this.state;

    return (
      <Row id="row">
        <CategorySelector
          selectedCat={selectedCat}
          categories={categories}
          deselectCat={this.deselectCat}
          onSelectCat={this.onSelectCat}
        />
      </Row>
    );
  }

  renderSidebar() {
    return (
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 8 }}
        lg={{ span: 6 }}
      >
        {this.renderCategorySelector(
          isClient ? window.innerWidth >= 768 : true
        )}

        <Row id="row">
          <Subscribe />
        </Row>
        <Row id="row">
          <Follow />
        </Row>
        <Row id="row">
          <RecentTweets />
        </Row>
      </Col>
    );
  }

  render() {
    const { selectedCat, numPostsPerPage, posts = [], page } = this.state;

    const endIndex = page * numPostsPerPage;
    const filteredPosts =
      selectedCat === 'All'
        ? posts
        : posts.filter(post => selectedCat === post.data.category);
    const visiblePosts = filteredPosts.slice(1, endIndex);

    // We should load if we have more then 5 items a page
    // and when paginating we are less then the total amount of posts
    const shouldLoad =
      filteredPosts.length > numPostsPerPage &&
      visiblePosts.length + 1 < filteredPosts.length;

    return (
      <RootWrap>
        <div id="root">
          <div id="header">
            <div id="headerTitle">Blog</div>
            {selectedCat !== 'All' && (
              <div id="headerSubtitle">{selectedCat}</div>
            )}
          </div>
          <div id="gridContainer">
            <Row gutter={24}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 26 }}
                md={{ span: 16 }}
                lg={{ span: 18 }}
                id="blogs"
              >
                <PostsContainer>
                  <PostPreview
                    history={this.props.history}
                    post={filteredPosts[0]}
                    featured={true}
                  />
                  <PoseGroup>
                    {visiblePosts.map((post, i) => (
                      <PostContainer key={i}>
                        <PostPreview
                          key={`post#${i}`}
                          history={this.props.history}
                          post={post}
                          i={i}
                        />
                      </PostContainer>
                    ))}
                  </PoseGroup>
                  <Col xs={{ span: 24 }}>
                    {shouldLoad && (
                      <Button
                        type="primary"
                        className="load-more-button"
                        onClick={this.onLoadMore}
                      >
                        Load more
                      </Button>
                    )}
                  </Col>
                </PostsContainer>
              </Col>
              {this.renderSidebar()}
            </Row>
          </div>
        </div>
      </RootWrap>
    );
  }
}

export default Blog;
