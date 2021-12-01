import React from 'react';

function Issue({ issue }) {
  return (
    <div className='issue'>
      <h4>{issue.title}</h4>
      <p>{issue.body}</p>
    </div>
  );
}

export default Issue;
