import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid #fcc0f6;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 460px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  background-color: #fff;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
  width: 80%;
  height: auto;
`;

const ContainerWraper = styled.div`
  display: flex;
  justify-content: center;
`;

export { CardStyle, ProductImage, CardContainer, ContainerWraper };
