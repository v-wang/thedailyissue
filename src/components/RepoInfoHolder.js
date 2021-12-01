import React from 'react';
import RepoInfo from './RepoInfo';
import RepoIcons from './RepoIcons';
import RepoIssues from './RepoIssues';
import { useContext } from 'react';
import { RepoContext } from '../RepoContext';

function RepoInfoHolder(props) {
  const repoData = props.location.state;
  const { repository } = useContext(RepoContext);
  console.log(repoData);
  console.log(repository);

  return (
    <div>
      <RepoInfo repository={repoData}></RepoInfo>
      <RepoIcons repository={repoData}></RepoIcons>
      <RepoIssues repository={repository}></RepoIssues>
    </div>
  );
}

export default RepoInfoHolder;
