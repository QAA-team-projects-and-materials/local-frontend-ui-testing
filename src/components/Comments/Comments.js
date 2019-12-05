import React, { useState } from 'react';

import CommentsHeader from './CommentsHeader';
export default function Comments(props) {
  const [numOfComments, setNumOfComments] = useState(2);
  return (
    <>
      <ul className='comments-list'>
        {props.comments
          ? props.comments.slice(0, numOfComments).map((comment, index) => {
              return (
                <li key={index} className='comment-item'>
                  <CommentsHeader
                    author={comment.author}
                    createdAt={comment.createdAt}
                  />
                  <p>{comment.comment}</p>
                </li>
              );
            })
          : null}
        {numOfComments < props.comments.length ? (
          <div
            href='#1'
            className='more-comments more-comments'
            onClick={() => {
              setNumOfComments(numOfComments + 2);
            }}
          >
            View more comments <span>+</span>
          </div>
        ) : null}
      </ul>
    </>
  );
}