import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 755px;
  margin: 0 auto;
`;

const LeftSide = styled.div`
  width: 30%;
  min-width: 232px;
  padding-right: 20px;
`;

const RightSide = styled.div`
  
`;

const PageGrid = ({ left, right, top }) => {
  return (
    <Fragment>
      {top}
      <Wrapper>
        <LeftSide>
          {left}
        </LeftSide>
        <RightSide>
          {right}
        </RightSide>
      </Wrapper>
    </Fragment>
  )
};

export default PageGrid;