import React from 'react';
import Repo from './Repo';

function RepoResults({ repos }) {
  return (
    <>
      {repos.map((repo) => {
        return <Repo repo={repo} />;
      })}
    </>
  );
}

export default RepoResults;
