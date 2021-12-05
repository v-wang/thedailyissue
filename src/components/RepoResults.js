import React from 'react';
import Repo from './Repo';

function RepoResults({ repoList }) {
  if (repoList.length === 0) {
    return <h5>No favorites.</h5>;
  }
  return (
    <div className='repo-results-grid'>
      {repoList.map((repo) => {
        return <Repo repo={repo} />;
      })}
    </div>
  );
}

export default RepoResults;
