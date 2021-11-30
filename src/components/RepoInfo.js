import React from 'react';
import { useContext } from 'react';
import { RepoContext } from '../RepoContext';

function RepoInfo(props) {
  const { repository } = useContext(RepoContext);
  if (repository === undefined) {
    return <h5>No repo selected. Select one to proceed.</h5>;
  } else {
    return (
      <div>
        <h5>{repository.name}</h5>
        <h5>{repository.owner.login}</h5>
        <h5>{repository.html_url}</h5>
        <h5>{repository.description}</h5>
      </div>
    );
  }
}

export default RepoInfo;
