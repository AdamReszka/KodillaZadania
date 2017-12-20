import React from 'react';
import Comment from 'CommentContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id}/>)}</ul>;

export default CommentsList;
