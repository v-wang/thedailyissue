import React from 'react';
import RepoInfo from './RepoInfo';
import RepoIcons from './RepoIcons';
import RepoIssues from './RepoIssues';
import { useContext, useState } from 'react';
import { RepoContext } from '../RepoContext';

function RepoInfoHolder(props) {
  const repoData = props.location.state;
  const { repository } = useContext(RepoContext);
  const [bugCount, setBugCount] = useState(0);

  return (
    <>
      <RepoInfo repository={repoData}></RepoInfo>
      <RepoIcons repository={repoData}></RepoIcons>
      <RepoIssues
        repository={repository}
        bugCount={bugCount}
        setBugCount={setBugCount}
      ></RepoIssues>
    </>
  );
}

export default RepoInfoHolder;
