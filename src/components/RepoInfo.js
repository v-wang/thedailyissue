import React from 'react';

function RepoInfo({ repository }) {
  return (
    <div className='repoGenInfo'>
      <a href={repository.html_url} target='_blank' rel='noreferrer'>
        <h1>{repository.name}</h1>
      </a>
      <h2>{repository.html_url}</h2>
      <h2>Owner: {repository.owner.login}</h2>
      <h2>
        {repository.language === null
          ? null
          : `Language: ${repository.language}`}
      </h2>
      <p>{repository.description}</p>
    </div>
  );
}

export default RepoInfo;
