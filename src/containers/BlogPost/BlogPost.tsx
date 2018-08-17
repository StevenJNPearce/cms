import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { size } from '@src/breakpoints';
import { Link } from 'react-static';
import Moment from 'react-moment';
import Markdown from 'react-markdown';

import Subscribe from '@components/Blog/Subscribe';
import SocialLinks from '@components/Blog/SocialLinks';
import VerticalPostPreview from '@components/Blog/VerticalPostPreview';
import { History } from 'history';

const BlogPostWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    width: 75%;
    text-align: center;
    @media screen and (max-width: ${size.tablet}) {
      width: 95%;
    }
  }
  }

  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 60px;
    opacity: 0;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    padding: 0px 15px 0px 15px;
    text-align: left;
    z-index: 1000;

    transition: 300ms;
    &.visible {
      transition: 300ms;
      opacity: 1;
      min-height: 60px;
    }

    > div#title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }
  }

  div#links-header {
    padding-left: 5px;
    display: flex;

    * {
      padding: 0px 4px 0px 4px;
    }
  }

  div#links-body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > a {
      margin: 0px 7px 0px 7px;
    }

    @media screen and (max-width: ${size.tablet}) {
      flex-direction: column;

      > a {
        margin: 12px 0px 0px 0px;
      }
    }
  }
`;
const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    to bottom,
    #181f26 0%,
    #181f26 15%,
    #f6f6f6 15%,
    #f6f6f6 100%
  );
  padding-bottom: 40px;
`;
const OuterContainer = styled.div`
  width: 65%;
  padding: 20px;
  @media screen and (max-width: ${size.tablet}) {
    width: 95%;
  }
`;
const ColumnContainer = styled.div`
  flex-direction: column;
`;
const BlogContainer = styled.div`
  background-color: #fff;
  text-align: left;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
`;
const BlogImage = styled.img`
  width: 100%;
`;
const ContentContainer = styled.div`
  color: #a5a5a8;
  padding: 30px;
  margin-bottom: 20px;
  img {
    max-width: 100%;
  }
`;
const TitleContainer = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 30px;
  padding-top: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: ${size.tablet}) {
    font-size: 22px;
  }
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CategoryContainer = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: #000;
  padding: 1px 4px 1px 4px;
  margin-right: 10px;
`;
const ReadTimeContainer = styled.p`
  font-size: 0.8rem;
`;
const SubmitAndSignContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;
`;
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  background-color: #fff;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
  padding: 30px;
  @media screen and (max-width: ${size.tabletL}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const SignUpText = styled.div`
  text-align: start;
  color: #646469;
`;
const Bold = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 10px;
`;
const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: ${size.tabletL}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const PostListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const BlogContent = styled.div`
  font-weight: 400;
  color: #646469;
`;

interface Post {
  data: {
    title: string;
    published_at: number;
    author: string;
    thumbnail: string;
    slug: string;
    category: string;
    readtime: number;
  };
  content: string;
}

interface BlogData {
  posts: Post[];
  categories: string[];
}

interface BlogPostProps {
  blogData: BlogData;
  history: History;
  post: Post;
}

class BlogPost extends React.Component<BlogPostProps, {}> {
  constructor(props: BlogPostProps) {
    super(props);
  }

  filterPosts(posts: Post[], post: Post, n: number) {
    if (!post || !posts) {
      return undefined;
    }
    const filteredById = posts.filter(el => el.data.title !== post.data.title);
    if (filteredById.length <= n) {
      return filteredById;
    }
    const filteredByCat = filteredById.filter(
      el => el.data.category === post.data.category
    );
    if (filteredByCat.length >= n) {
      return filteredByCat.slice(0, n);
    } else {
      return filteredByCat
        .concat(
          filteredById.filter(el => el.data.category !== post.data.category)
        )
        .slice(0, n);
    }
  }

  render() {
    const { blogData, history, post } = this.props;

    const source = post.data.source;
    const slug = `/blog/post/${post.data.slug}`;
    const hasSource = typeof source === 'string';

    return (
      <BlogPostWrap>
        <BackgroundContainer>
          <OuterContainer>
            <ColumnContainer>
              <Button
                type="primary"
                icon="arrow-left"
                onClick={() => history.goBack()}
                style={{
                  fontSize: '20px',
                  height: 40,
                  marginBottom: 20,
                  width: 40
                }}
              />
              <BlogContainer>
                <BlogImage
                  src={post.data.thumbnail}
                  alt={post.data.title}
                  id="mainImage"
                />
                <ContentContainer>
                  <RowContainer>
                    <CategoryContainer className="category">
                      {post.data.category.toUpperCase()}
                    </CategoryContainer>
                    <Moment format={'MMMM Do, YYYY'}>
                      {post.data.published_at}
                    </Moment>
                  </RowContainer>
                  <TitleContainer className="titled">
                    {post.data.title}
                  </TitleContainer>
                  <RowContainer
                    style={{
                      justifyContent: 'space-between',
                      lineHeight: '45px',
                      marginBottom: '15px'
                    }}
                  >
                    <ReadTimeContainer className="readtime">
                      Reading time: {post.data.readtime} minutes
                    </ReadTimeContainer>
                    <div>
                      <SocialLinks slug={source || slug} external={hasSource} />
                    </div>
                  </RowContainer>
                  <BlogContent>
                    <Markdown source={post.content} escapeHtml={false} />
                  </BlogContent>
                </ContentContainer>
              </BlogContainer>
              <SubmitAndSignContainer>
                <SignUpContainer>
                  <SignUpText>
                    <Bold>Want to Learn More?</Bold>
                    <p>Chat with the founders and engineering team</p>
                  </SignUpText>
                  <Link to="https://t.me/Market_Protocol_Chat" target="_blank">
                    <Button className="btntelegram" type="primary">
                      <span
                        style={{
                          padding: '0 1rem'
                        }}
                      >
                        Join our Telegram
                      </span>
                    </Button>
                  </Link>
                </SignUpContainer>
                <SubmitContainer>
                  <Subscribe />
                </SubmitContainer>
              </SubmitAndSignContainer>
            </ColumnContainer>
            <Bold
              className="readersenjoy"
              style={{ margin: '40px', fontSize: '1.4rem' }}
            >
              Readers also enjoyed
            </Bold>
            <PostListContainer>
              {blogData && blogData.posts.length > 0 ? (
                this.filterPosts(blogData.posts, post, 3).map(el => (
                  <VerticalPostPreview
                    key={el.data.title}
                    history={history}
                    post={el}
                  />
                ))
              ) : (
                <Bold
                  style={{
                    color: '#a5a5a8',
                    fontSize: '1.2rem',
                    margin: '20px'
                  }}
                >
                  No posts
                </Bold>
              )}
            </PostListContainer>
          </OuterContainer>
        </BackgroundContainer>
      </BlogPostWrap>
    );
  }
}

export default BlogPost;
