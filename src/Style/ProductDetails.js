import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;

const Productdetails = styled.div`
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    `;

const CommentsContainer = styled.div`
   background-color: #f8f8f8;
   display: flex;
    `;

const ProductTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;


export { ProductContainer, Productdetails, CommentsContainer, ProductTitle, ProductImage};