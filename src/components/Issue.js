import React from 'react';
import commLine from '../assets/commit-line.png';
import issueIcon from '../assets/issue.png';
import issueGreenIcon from '../assets/issue-green.png';

function Issue({ issue }) {
  return (
    <div className='issue'>
      <div className='issueTitle'>
        <img src={commLine} />
        <h3>
          {new Date(issue.created_at)
            .toUTCString()
            .split(' ')
            .splice(1, 3)
            .join(' ')}
        </h3>
        <h3>{issue.title}</h3>
      </div>
      <div className='issueBodyHolder'>
        <p>{issue.body === null ? 'No description provided.' : issue.body}</p>
        <a href={issue.html_url} target='blank' rel='nonreferrer'>
          <h4>more info</h4>
        </a>
      </div>
    </div>
  );
}

export default Issue;
