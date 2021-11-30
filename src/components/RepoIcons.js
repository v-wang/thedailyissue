import React from 'react';

function RepoIcons({ repository }) {
  return (
    <div>
      <h5>{repository.stargazers_count}</h5>
      <h5>{repository.forks_count}</h5>
      <h5>{repository.subscribers_count}</h5>
      <h5>{repository.open_issues_count}</h5>
    </div>
  );
}

export default RepoIcons;
