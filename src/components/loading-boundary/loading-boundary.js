import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  top: calc(50% - 10px);

  width: 20px;
  height: 20px;
  background-color: #2196F3;
  animation: ${rotate} 2s ease-in-out infinite;
`;

const RelativeDiv = styled.div`position: relative;`;

const SpinnerBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .7);
`;

const Spinner = () => {
  return (
    <SpinnerBackground>
      <StyledSpinner/>
    </SpinnerBackground>
  )
};

const LoadingBoundary = ({ loading, children }) => {
  return (
      <RelativeDiv>
        {children}
        {loading ? <Spinner/> : null}
      </RelativeDiv>
  );
};

export default LoadingBoundary;
