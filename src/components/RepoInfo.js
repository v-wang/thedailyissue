import React from 'react';

function RepoInfo({ repository }) {
  return (
    <div className='repoGenInfo'>
      <img src={repository.owner.avatar_url} />
      <h1>{repository.name}</h1>

      <a href={repository.html_url} target='blank' rel='nonreferrer'>
        ({repository.html_url})
      </a>
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
