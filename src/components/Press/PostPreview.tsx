import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import { History } from 'history';
import { device } from '@src/breakpoints';

import SocialLinks from '@components/Blog/SocialLinks';

const RootWrap = styled.div`
  width: 100%;
  margin-bottom: 24px;
  padding: 0 12px;

  @media ${device.mobileS} and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }

  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    transition: all 300ms;

    :hover {
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.15);
    }

    #blogStats {
      #blogStatsCategory {
        background: #181e26;
        color: #ffffff;
        display: inline-block;
        font-size: 10px;
        line-height: 12px;
        padding: 4px 10px;
        text-transform: uppercase;
        vertical-align: top;
        margin-right: 19px;
      }

      #blogStatsTime {
        color: #8b8b8b;
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        vertical-align: top;
      }
    }

    #blogImage {
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      border: none;
      height: 132px;
      margin: -30px 0 30px -30px;
      width: calc(100% + 60px);
    }

    #blogTitle {
      font-weight: bold;
      margin-top: 12px;
      color: #000;
    }

    #blogContent {
      color: #646469;
      margin-top: 10px;
      margin-bottom: 38px;
    }

    #blogActions {
      margin-top: auto;

      #blogLink {
        color: #00e2c1;
        display: inline-block;
        line-height: 30px;

        #arrow-container {
          background: #00e2c1;
          border-radius: 100%;
          color: white;
          display: inline-block;
          height: 16px;
          line-height: 16px;
          margin-left: 9px;
          margin-top: 8px;
          text-align: center;
          vertical-align: top;
          width: 16px;

          #arrow {
            margin-top: -1px;
            position: absolute;
            margin-left: -2px;
          }
        }
      }

      #socialLinksWrapper {
        float: right;
      }
    }
  }
`;

interface Post {
  data: {
    title: string;
    author: string;
    category: string;
    published_at: string;
    article_link: string;
    thumbnail: string;
    slug: string;
    source: string;
  };
  content: string;
}

interface PostPreviewProps {
  history: History;
  featured?: boolean;
  external?: boolean;
  base?: string;
  post: Post;
}

class PostPreview extends React.Component<PostPreviewProps> {
  render() {
    const { post, featured } = this.props;

    if (!post) {
      return null;
    }

    const source = post.data.article_link;
    const goto = () => window.open(source, '_blank');

    return (
      <RootWrap onClick={goto}>
        <div id="root">
          <div
            id="blogImage"
            style={{
              backgroundImage: `url(${post.data.thumbnail})`,
              height: featured ? '280px' : '132px'
            }}
          />
          <div id="blogStats">
            <div id="blogStatsTime">
              <Moment format={'MMMM D, YYYY'}>{post.data.published_at}</Moment>
            </div>
          </div>
          <div
            id="blogTitle"
            style={{
              fontSize: featured ? '28px' : '21px',
              lineHeight: featured ? '33px' : '29px'
            }}
          >
            {post.data.title}
          </div>
          <div
            style={{
              fontSize: featured ? '18px' : '14px',
              lineHeight: featured ? '24px' : '20px'
            }}
            id="blogContent"
          >
            {post.content}
          </div>
          <div id="blogActions">
            <div id="blogLink">
              Read More{' '}
              <div id="arrow-container">
                <span id="arrow">›</span>
              </div>
            </div>
            <div id="socialLinksWrapper">
              <SocialLinks slug={source} external={true} />
            </div>
          </div>
        </div>
      </RootWrap>
    );
  }
}

export default PostPreview;
