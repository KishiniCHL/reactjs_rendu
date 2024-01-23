import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  useGetAllProductsQuery,
  useGetCommentsQuery,
  useCreateCommentMutation,
} from '../Services/API';

import Navbar from '../Components/Header'; 


const Card = styled.div`
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
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export default function Home() {
  const { data: products, isFetching } = useGetAllProductsQuery();

  return (
    <div>
      <Navbar />
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <ProduitsList produits={products}/>
      )}
    </div>
  );
}



function ProduitsList({ produits }) {
  if (!produits) {
    return <p>No data</p>;
  }

  return (
    <CardContainer>
      {produits.map((produit) => (
        <Card key={produit.id}>
            <h3>{produit.title}</h3>
            <ProductImage src={produit.image} alt={produit.title} />
            <Link to={`/produits/${produit.id}`}>
                <StyledButton>
                    Voir le produit
                </StyledButton>
            </Link>
            <StyledButton>
            Ajouter au panier
            </StyledButton>
                    {/* <ProductComments productId={produit.id} />
          <AddComment productId={produit.id} /> */}
        </Card>
      ))}
    </CardContainer>

  );
}



// function ProductComments({ productId }){
//     let { data: comment, isLoading } = useGetCommentsQuery(productId)
    
//     if (isLoading){
//         return <p>Loading comments...</p>
//     }

//     if(!comment){
//         return <p>No comments</p>
//     }

//     return (
//         <div>
//             {comment.slice(0, 4).map((commentaire) => (
//                 <div key={commentaire.id}>
//                     <h3>{commentaire.username}</h3>
//                     <p>{commentaire.comment.substring(0, 250)}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }


// function AddComment({ productId }){
//     let [createComment] = useCreateCommentMutation();
//     let [username, setUsername] = useState('');
//     let [comment, setComment] = useState('');


//     return (
//         <div>
//             <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
//             <textarea
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Add comment"
//             />
//             <button onClick={() => {
//                 createComment({ id: productId, username: username, comment: comment });
//                 setUsername(''); 
//                 setComment(''); 
//             }}> 
//                 Add comment 
//             </button>
//         </div>
//         // <button onClick={() => {
//         //     createComment({ id: productId, username: 'hl', comment: "test" });        }}> 
//         //     Add comment 
//         // </button>
//     );
// }