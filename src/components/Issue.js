import React, { useEffect } from 'react';
import { useState } from 'react';
import commLine from '../assets/commit-line.png';
import issueGrey from '../assets/issue-grey.png';

function Issue({ issue, bugCount, setBugCount }) {
  const [bug, setBug] = useState();

  const issueLabels = issue.labels;
  // const issueElem = document.getElementById(issue.id);
  useEffect(() => {
    if (issueLabels !== undefined) {
      setBug(false);
      issueLabels.forEach((label) => {
        if (label.name.toLowerCase() === 'bug') {
          setBug(true);
        }
      });
    }
  }, [issueLabels]);

  return (
    <div className='issue' id={issue.id}>
      <div className='issueTitle'>
        <img src={issueGrey} alt='grey issue icon' />
        <h3>
          {new Date(issue.created_at)
            .toUTCString()
            .split(' ')
            .splice(1, 3)
            .join(' ')}
        </h3>
      </div>
      <div
        className={`issueBodyHolder + ${bug === true ? 'bugBg bugC' : null}`}
      >
        <h3>{issue.title}</h3>
        <p>{issue.body === null ? 'No description provided.' : issue.body}</p>
        {issue.body !== null ? (
          <div className='gh-issue-link'>
            <img src={commLine} alt='button icon' />
            <a href={issue.html_url} target='blank' rel='nonreferrer'>
              <h4>more info</h4>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Issue;
