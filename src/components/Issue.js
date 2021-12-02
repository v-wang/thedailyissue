import React from 'react';
import commLine from '../assets/commit-line.png';

function Issue({ issue }) {
  return (
    <div className='issue'>
      <div className='issueTitle'>
        <img src={commLine} />
        <h3>{issue.title}</h3>
      </div>
      <div className='issueBodyHolder'>
        <p>{issue.body === null ? 'No description provided.' : issue.body}</p>
      </div>
    </div>
  );
}

export default Issue;
