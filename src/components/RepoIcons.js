import React from 'react';
import stargazer from '../assets/star.png';
import watch from '../assets/eye.png';
import fork from '../assets/fork.png';
import ghLogo from '../assets/gh-logo.png';
import repoIcon from '../assets/repository.png';
import commLine from '../assets/commit-line.png';
import issueIcon from '../assets/issue.png';

function RepoIcons({ repository }) {
  return (
    <div className='iconHolder'>
      <img src={stargazer} />
      <h5>{repository.stargazers_count}</h5>
      <img src={fork} />
      <h5>{repository.forks_count}</h5>
      <img src={watch} />
      {/* subscribers_count is the watch count */}
      <h5>{repository.subscribers_count}</h5>
      <img src={issueIcon} />
      <h5>{repository.open_issues_count}</h5>
    </div>
  );
}

export default RepoIcons;
