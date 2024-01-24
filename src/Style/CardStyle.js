import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
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


const ContainerWraper= styled.div`
    display: flex;
    justify-content: center;
`;


export { CardStyle, ProductImage, CardContainer, ContainerWraper};