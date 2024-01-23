import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCommentsQuery, useCreateCommentMutation } from '../Services/API';

export default function ProductDetails() {
  const { id } = useParams();
  const { data: comments, isLoading: isCommentsLoading } = useGetCommentsQuery(id);
  const [createComment] = useCreateCommentMutation();

  console.log(comments);
  
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    createComment({ id, username, comment });
    setUsername('');
    setComment('');
  };

  return (
    <div>
      {isCommentsLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            {comments.map((commentaire) => (
              <div key={commentaire.id}>
                <h3>{commentaire.username}</h3>
                <p>{commentaire.comment.substring(0, 250)}</p>
              </div>
            ))}
          </div>

          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment"
            />
            <button onClick={handleAddComment}>Add comment</button>
          </div>
        </div>
      )}
    </div>
  );
}
