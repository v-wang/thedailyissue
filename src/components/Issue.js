import React from 'react';

function Issue({ issue }) {
  return (
    <div className='issue'>
      <h2>{issue.title}</h2>
      <p>{issue.body === null ? 'No description provided.' : issue.body}</p>
    </div>
  );
}

export default Issue;
