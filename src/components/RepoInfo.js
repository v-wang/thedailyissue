import React from 'react';
import { useContext, useState } from 'react';
import { RepoContext } from '../RepoContext';
import heartClear from '../assets/heart-clear.png';
import heartRed from '../assets/heart-red.png';

function RepoInfo({ repository }) {
  const { saveFav, checkSaved } = useContext(RepoContext);

  const [saveState, setSaveState] = useState(false);

  const heartIcon = document.getElementById(repository.id + 1);

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
          saveFav(`/${repository.full_name}`);
          console.log(checkSaved(`/${repository.full_name}`));
        }}
      >
        <img
          src={
            checkSaved(`/${repository.full_name}`) === false
              ? heartClear
              : heartRed
          }
          id={repository.id + 1}
        />
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
