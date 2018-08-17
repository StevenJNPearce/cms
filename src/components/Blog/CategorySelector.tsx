import React from 'react';
import styled from 'styled-components';
import Category from '@components/Blog/Category';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    width: 100%;
    display: block;

    #categories {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
      margin: 36px 0 14px 0;
    }

    #title {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
    }

    #subtitle {
      color: #646469;
      font-size: 14px;
      line-heigh: 20px;
      margin-top: 10px;
    }
  }
`;

interface CategorySelectorProps {
  selectedCat: string;
  categories: string[];
  onSelectCat: (cat: string) => void;
  deselectCat: () => void;
}

export default ({
  selectedCat,
  categories,
  onSelectCat,
  deselectCat
}: CategorySelectorProps) => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">About Our Blog</h2>
        <p id="subtitle">
          From team announcements to deep dives into the history of derivatives
          trading, you will find it all here.
        </p>
        <h2 id="title">Categories</h2>
        {categories.map((cat, i) => (
          <Category
            key={`cat#${i}`}
            cat={cat}
            selectedCat={selectedCat}
            deselectCat={deselectCat}
            onClick={() => (selectedCat === cat ? null : onSelectCat(cat))}
          />
        ))}
      </div>
    </RootWrap>
  );
};
