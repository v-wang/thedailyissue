import React from 'react';
import RepoInfo from './RepoInfo';
import RepoIcons from './RepoIcons';
import RepoIssues from './RepoIssues';
import { useContext } from 'react';
import { RepoContext } from '../RepoContext';

function RepoInfoHolder(props) {
  const repoData = props.location.state;
  const { repository } = useContext(RepoContext);

  return (
    <>
      <RepoInfo repository={repoData}></RepoInfo>
      <RepoIcons repository={repoData}></RepoIcons>
      <RepoIssues repository={repository}></RepoIssues>
    </>
  );
}

export default RepoInfoHolder;
