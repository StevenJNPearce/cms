import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { History } from 'history';
import posed, { PoseGroup } from 'react-pose';
import { device } from '@src/breakpoints';

import PostPreview from '@components/Press/PostPreview';

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
  header {
    align-items: center;
    height: 200px;
    display: flex;
    justify-content: center;
    background: #181e26;
    width: 100%;
  }

  .title {
    color: #ffffff;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
  }

  .gridContainer {
    max-width: 100%;
    margin: 0 auto;
    width: 1180px;
    padding: 24px;
  }

  .row {
    margin-top: 24px;
  }

  .load-more-button {
    display: block;
    font-size: 20px;
    margin: 100px auto;
    padding: 0 65px;
    text-align: center;
  }
`;

interface PressProps {
  posts: Post[];
  history: History;
}

interface PressState {
  numPostsPerPage: number;
  posts: Post[];
  page: number;
}

interface Post {
  data: {
    title: string;
    author: string;
    published_at: number;
    article_link: string;
    thumbnail: string;
    slug: string;
    readtime: number;
  };
  content: string;
}

class Press extends React.Component<PressProps, PressState> {
  constructor(props: PressProps) {
    super(props);

    this.state = {
      numPostsPerPage: 6,
      page: 1,
      posts: []
    };
  }

  componentDidMount() {
    const { posts } = this.props;
    this.setState({ posts });
  }

  onLoadMore = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  render() {
    const { numPostsPerPage, posts = [], page } = this.state;

    const endIndex = page * numPostsPerPage;
    const visiblePosts = posts.slice(0, endIndex);

    // We should load if we have more then 5 items a page
    // and when paginating we are less then the total amount of posts
    const shouldLoad =
      posts.length > numPostsPerPage && visiblePosts.length < posts.length;

    return (
      <RootWrap>
        <header>
          <h1 className="title">Press</h1>
        </header>
        <div className="gridContainer">
          <Row gutter={24}>
            <PostsContainer>
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
          </Row>
        </div>
      </RootWrap>
    );
  }
}

export default Press;
