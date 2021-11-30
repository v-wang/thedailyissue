import React from 'react';
import RepoInfo from './RepoInfo';
import RepoIcons from './RepoIcons';
import RepoIssues from './RepoIssues';

function RepoInfoHolder({ repository }) {
  if (repository === undefined) {
    return (
      <div>
        <h5>No repository selected. Please select one to continue.</h5>
      </div>
    );
  }
  return (
    <div>
      <RepoInfo repository={repository}></RepoInfo>
      <RepoIcons repository={repository}></RepoIcons>
      <RepoIssues repository={repository}></RepoIssues>
    </div>
  );
}

export default RepoInfoHolder;
