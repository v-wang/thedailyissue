import React from 'react';

function RepoInfo({ repository }) {
  return (
    <div className='repoGenInfo'>
      <h5>{repository.name}</h5>
      <h5>{repository.language}</h5>
      <h5>{repository.owner.login}</h5>
      <h5>{repository.html_url}</h5>
      <h5>{repository.description}</h5>
    </div>
  );
}

export default RepoInfo;
