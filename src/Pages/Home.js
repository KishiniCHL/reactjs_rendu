import { useGetProduitsQuery, useGetCommentsQuery, useCreateCommentMutation  } from "../Services/API"
import styled from "styled-components"

export default function () {
    let { data, isFetching } = useGetProduitsQuery()

    return (
        <div>
            Home 
            {isFetching ? <p>ça fetch</p> : <ProduitsList produits={data} />}
        </div>
    );
}

function ProduitsList({ produits }) {
    if (!produits) {
        return <p>No data</p>;
    }

    return (
        <div>
            {produits.map((produit) => (
                <div key={produit.id}>
                    <h3>{produit.title}</h3>
                    <img src={produit.image} alt={produit.title} />
                    <ProductComments productId={produit.id} />
                    <AddComment productId={produit.id} />
                </div>
            ))}
        </div>
    );
}

function ProductComments({ productId }){
    let { data: comment, isLoading } = useGetCommentsQuery(productId)
    
    if (isLoading){
        return <p>Loading comments...</p>
    }

    if(!comment){
        return <p>No comments</p>
    }

    return (
        <div>
            {comment.map((commentaire) => (
                <div key={commentaire.id}>
                    <h3>{commentaire.username}</h3>
                    <p>{commentaire.comment.substring(0, 250)}</p>
                </div>
            ))}
        </div>
    );
}


function AddComment({ productId }){
    let [createComment] = useCreateCommentMutation();

    return (
        <button onClick={() => {
            createComment({ id: productId, username: 'hl', comment: "test" });        }}> 
            Add comment 
        </button>
    );
}