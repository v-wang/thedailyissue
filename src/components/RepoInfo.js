import React from 'react';
import { useContext } from 'react';
import { RepoContext } from '../RepoContext';

function RepoInfo({ repository }) {
  const { saveFav } = useContext(RepoContext);

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
      <button onClick={() => saveFav(repository.id)}>favorite</button>
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
