import React from 'react';

function RepoInfo({ repository }) {
  return (
    <div>
      <div className='repoGenInfo'>
        <h5>{repository.name}</h5>
        <h5>{repository.owner.login}</h5>
        <h5>{repository.html_url}</h5>
        <h5>{repository.description}</h5>
      </div>
    </div>
  );
}

export default RepoInfo;
