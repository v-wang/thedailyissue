import React from 'react';
import Repo from './Repo';

function RepoResults({ repos }) {
  const selectRepo = (ev) => {
    console.log(ev.target.id);
  };
  return (
    <>
      {repos.map((repo) => {
        return <Repo repo={repo} selectRepo={selectRepo} />;
      })}
    </>
  );
}

export default RepoResults;
