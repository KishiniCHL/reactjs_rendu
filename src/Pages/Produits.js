import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery, useGetCommentsQuery, useCreateCommentMutation } from '../Services/API';
import styled from 'styled-components';



import Navbar from '../Components/Header'; 


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




export default function ProductDetails() {
  const { id } = useParams();
  const { data: products, isFetching: isProductsFetching } = useGetProductQuery();
  const { data: comments, isLoading: isCommentsLoading } = useGetCommentsQuery(id);
  const [createComment] = useCreateCommentMutation();
  
  const [product, setProduct] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);

  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    createComment({ id, username, comment });
    setUsername('');
    setComment('');
  };

  useEffect(() => {
    if (products) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
      console.log(foundProduct)
    }
  }, [id, products]);

  

  return (
    <div>
        <Navbar />
      {isProductsFetching || isCommentsLoading ? (
        <p>Loading...</p>
      ) : !product ? (
        <p>Pas de produits</p>
      ) : (

        <ProductContainer>
        <Productdetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductImage src={product.image} alt={product.title} />
        </Productdetails>
        <CommentsContainer>
            <div>
        {(showAllComments ? comments : comments.slice(0, 6)).map((commentaire) => (
            <div key={commentaire.id}>
            <h3>{commentaire.username}</h3>
            <p>{commentaire.comment.substring(0, 200)}</p>
            </div>
        ))}
        {comments.length > 6 && (
            <button onClick={() => setShowAllComments(!showAllComments)}>
            {showAllComments ? 'Voir moins' : 'Voir plus de commentaires'}
            </button>

        )}</div>

        <div>
            <input
              type="text"
              placeholder="Utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Ajouter un commentaire"
            />
            <button onClick={handleAddComment}>Ajouter</button>
          </div>
        </CommentsContainer>

         
          </ProductContainer>
      )}
    </div>
  );
}
