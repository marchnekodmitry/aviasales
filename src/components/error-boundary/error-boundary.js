import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 10px;
  background-color: tomato;
  border-radius: 0 10px 0 0;
  
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
`;

const StyledLink = styled.a`
  color: #FFFFFF;
`;

const ErrorIndicator = ({ requestData }) => {
  return (
    <StyledError>
      Ошибка: не все билеты загружены. <StyledLink href='request' onClick={(e) => requestData(e)}>Попробуйте снова</StyledLink>
    </StyledError>
  )
};

const ErrorBoundary = ({ error, children, requestFunc }) => {
  const requestData = (e) => {
    e.preventDefault();
    requestFunc()
  };

  return (
    <Fragment>
      {children}
      {error ? <ErrorIndicator requestData={requestData}/> : null}
    </Fragment>
  )
};

export default ErrorBoundary;
