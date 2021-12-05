import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { RepoContext } from '../RepoContext';
import commLine from '../assets/commit-line.png';
import issueIcon from '../assets/issue.png';
import issueGreenIcon from '../assets/issue-green.png';

function Issue({ issue }) {
  const [bug, setBug] = useState();
  const [labels, setLabels] = useState();

  const { bugLabel, setBugLabel } = useContext(RepoContext);
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
  });

  return (
    <div className='issue' id={issue.id}>
      <div className='issueTitle'>
        <img src={commLine} />
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
        {/* setting bug red is working, need to just make the specific card ID red */}

        <h3>{issue.title}</h3>

        <p>{issue.body === null ? 'No description provided.' : issue.body}</p>
        <a href={issue.html_url} target='blank' rel='nonreferrer'>
          <h4>more info</h4>
        </a>
      </div>
    </div>
  );
}

export default Issue;
