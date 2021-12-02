import React from 'react';

function RepoInfo({ repository }) {
  return (
    <div className='repoGenInfo'>
      <div className='genInfoTop'>
        <img src={repository.owner.avatar_url} />
        <div className='titleLink'>
          <h1>{repository.name}</h1>
          <a href={repository.html_url} target='blank' rel='nonreferrer'>
            ({repository.html_url})
          </a>
        </div>
      </div>
      <p>
        <b>Owner:</b> {repository.owner.login}
      </p>

      {repository.language === null ? null : (
        <p>
          <b>Language:</b> {repository.language}
        </p>
      )}

      <p>{repository.description}</p>
    </div>
  );
}

export default RepoInfo;
