import React from 'react';
import styled from 'styled-components';

import close from '@images/close.svg';

interface CategoryProps {
  cat: string;
  selectedCat?: string;
  deselectCat?: () => void;
  onClick?: () => void;
}

const RootWrap = styled.div`
  > #root {
    background-color: ${props => props.selected && 'rgb(246, 246, 246)'};
    color: #00e2c1;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    line-height: 22px;
    padding: 12px;
    margin: 0;

    &:hover {
      background-color: rgb(246, 246, 246);
    }
  }
`;

const Close = styled.div`
  height: 12px;
  width: 12px;

  img {
    width: 100%;
  }
`;

export default ({ cat, onClick, selectedCat, deselectCat }: CategoryProps) => (
  <RootWrap onClick={onClick} selected={cat !== 'All' && selectedCat === cat}>
    <div id="root">
      {cat}
      {cat !== 'All' &&
        selectedCat === cat && (
          <Close onClick={deselectCat}>
            <img alt="deselect category" src={close} width="80%" />
          </Close>
        )}
    </div>
  </RootWrap>
);
