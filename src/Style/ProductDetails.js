import styled from "styled-components";


const ProductContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  width: 80%;
`;

const ProductBloc = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

`;

const ProductComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CommentsContainer = styled.div`
  width: 500px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 24px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const InputStyle = styled.input`
  padding: 8px;
  border:none;
`;

const PlaceHolderStyle = styled.textarea`
  margin-top: 12px;
  padding: 12px;
  border:none;
  `;
  
  const CommentsDisplayContainer = styled.div`
  width: 100%;
  height: auto;
  overflow:hidden;
  `;

export {
  ProductComment,
  ProductContainer,
  ProductBloc,
  CommentsContainer,
  ProductTitle,
  ProductImage,
  InputStyle,
  PlaceHolderStyle,
  TextContainer ,
  CommentsDisplayContainer,
};
