import React from 'react';
import Repo from './Repo';

function RepoResults({ repoList }) {
  return (
    <>
      {repoList.map((repo) => {
        return <Repo repo={repo} />;
      })}
    </>
  );
}

export default RepoResults;
