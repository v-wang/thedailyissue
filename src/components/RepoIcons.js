import React from 'react';

function RepoIcons({ repository }) {
  return (
    <div>
      <h5>{repository.stargazers_count}</h5>
    </div>
  );
}

export default RepoIcons;
