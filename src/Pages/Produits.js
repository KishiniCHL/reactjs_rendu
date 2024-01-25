import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  useGetProductQuery,
  useGetCommentsQuery,
  useCreateCommentMutation,
} from "../Services/API";
import { useCart } from "../Providers/CartContext";
import Navbar from "../Components/Header";
import {
  ProductComment,
  ProductContainer,
  ProductBloc,
  ProductTitle,
  ProductImage,
  CommentsContainer,
  TextContainer,
  InputStyle,
  PlaceHolderStyle,
  CommentsDisplayContainer,
} from "../Style/ProductDetails"; // Remove StyledButton from here
import {
  StyledButton,
  StyledButtonPink,
  StyledButtonPinkSmall,
} from "../Style/StyledButton";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: products, isFetching: isProductsFetching } =
    useGetProductQuery();
  const { data: comments, isLoading: isCommentsLoading } =
    useGetCommentsQuery(id);
  const [createComment] = useCreateCommentMutation();

  const [product, setProduct] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    createComment({ id, username, comment });
    setUsername("");
    setComment("");
  };

  useEffect(() => {
    if (products) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
      console.log(foundProduct);
    }
  }, [id, products]);

  const { addToCart } = useCart();

  return (
    <div>
      <Navbar />
      {isProductsFetching || isCommentsLoading ? (
        <p>Loading...</p>
      ) : !product ? (
        <p>Pas de produits</p>
      ) : (
          <ProductContainer>
            <StyledButton as={Link} to="/">
              Revenir en arrière
            </StyledButton>
            <ProductComment>
              <ProductBloc>
                <ProductTitle>{product.title}</ProductTitle>
                <p>Prix : {product.price} €</p>
                <ProductImage src={product.image} alt={product.title} />
                <StyledButtonPink onClick={() => addToCart(product)}>
                  Ajouter au panier
                </StyledButtonPink>
              </ProductBloc>
              <CommentsContainer>
                <CommentsDisplayContainer>
                  {(showAllComments ? comments : comments.slice(0, 5)).map(
                    (commentaire) => (
                      <div key={commentaire.id}>
                        <h3>{commentaire.username}</h3>
                        <p>{commentaire.comment.substring(0, 200)}</p>
                      </div>
                    )
                  )}
                  {comments.length > 6 && (
                    <StyledButton
                      onClick={() => setShowAllComments(!showAllComments)}
                    >
                      {showAllComments
                        ? "Voir moins"
                        : "Voir plus de commentaires"}
                    </StyledButton>
                  )}
                </CommentsDisplayContainer>

                <TextContainer>
                  <InputStyle
                    type="text"
                    placeholder="Utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <PlaceHolderStyle
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Ajouter un commentaire"
                  />
                  <StyledButtonPinkSmall onClick={handleAddComment}>
                    Ajouter
                  </StyledButtonPinkSmall>
                </TextContainer>
              </CommentsContainer>
            </ProductComment>
          </ProductContainer>
      )}
    </div>
  );
}
