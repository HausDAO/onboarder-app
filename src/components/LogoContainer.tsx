import React from 'react';
import styled from 'styled-components';
import logo from '../assets/XAGjy9JK_400x400.jpg';

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  margin-bottom: 2rem;
  .img-block {
    display: flex;
    height: 12rem;
    width: 12rem;
  }
  img {
    height: 12rem;
    width: 12rem;
  }
`;

export const LogoContainer = () => {
  return (
    <ImageContainer>
      <div className="img-block">
        <img src={logo} />
      </div>
    </ImageContainer>
  );
};
