import React from 'react';

function Issue({ issue }) {
  return (
    <div className='issue'>
      <h4>{issue.title}</h4>
      <p>{issue.body === null ? 'No description provided.' : issue.body}</p>
    </div>
  );
}

export default Issue;
