import React from 'react';
import { useContext, useState } from 'react';
import { RepoContext } from '../RepoContext';
import heartClear from '../assets/heart-clear.png';
import heartRed from '../assets/heart-red.png';

function RepoInfo({ repository }) {
  const { saveFav } = useContext(RepoContext);

  const [saveState, setSaveState] = useState(false);

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
      <button
        onClick={() => {
          saveFav(repository.full_name);
          setSaveState(!saveState);
        }}
      >
        <img src={saveState === false ? heartClear : heartRed} />
      </button>
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
