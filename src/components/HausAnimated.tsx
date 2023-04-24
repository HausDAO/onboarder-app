import React from "react";
import styled from "styled-components";
import hausBlockAnimated from "../assets/Gittron__Avatar.png";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  margin-bottom: 2rem;
  .img-block {
    display: flex;
    height: 28rem;
    width: 28rem;
  }
  img {
    height: 28rem;
    width: 28rem;
  }
`;

export const HausAnimated = () => {
  return (
    <ImageContainer>
      <div className="img-block">
        <img src={hausBlockAnimated} />
      </div>
    </ImageContainer>
  );
};
