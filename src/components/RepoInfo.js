import React from 'react';
import { useContext, useState } from 'react';
import { RepoContext } from '../RepoContext';
import heart from '../assets/heart.png';
import heartRed from '../assets/heart-red.png';

function RepoInfo({ repository }) {
  const { saveFav, checkSaved } = useContext(RepoContext);

  return (
    <div className='repoGenInfo'>
      <button
        onClick={() => {
          saveFav(`/${repository.full_name}`);
        }}
      >
        <img
          src={
            checkSaved(`/${repository.full_name}`) === false ? heart : heartRed
          }
          id={repository.id + 1}
        />
      </button>
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
