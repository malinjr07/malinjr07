import React, { FC, ReactElement } from 'react';

interface CommentProps {
  comment: {
    id: number;
    author: string;
    date: string;
    content: string;
    avatar: string;
  };
}

const Comment: FC<CommentProps> = ({ comment }): ReactElement => {
  const { author, date, content, avatar } = comment;

  return (
    <div className="single-comment-box">
      <div className="img-box">
        <img src={avatar} alt="" />
      </div>
      <div className="content-box">
        <h3>{author}</h3>
        <span className="date">{date}</span>
        <p>{content}</p>
        <a href="#" className="reply">Reply</a>
      </div>
    </div>
  );
};

export default Comment;
