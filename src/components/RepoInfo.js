import React from 'react';
import { useContext } from 'react';
import { RepoContext } from '../RepoContext';
import heart from '../assets/heart.png';
import heartRed from '../assets/heart-red.png';

function RepoInfo({ repository }) {
  // from App component
  const { saveFav, checkSaved } = useContext(RepoContext);

  return (
    <div className='repoGenInfo'>
      <div className='genInfoTop'>
        <img src={repository.owner.avatar_url} alt='repository owner avatar' />
        <div className='titleLink'>
          <button
            onClick={() => {
              saveFav(`/${repository.full_name}`);
            }}
          >
            <img
              src={
                checkSaved(`/${repository.full_name}`) === false
                  ? heart
                  : heartRed
              }
              id={repository.id + 1}
              alt={repository.full_name}
            />
          </button>
          <h1>{repository.name}</h1>
        </div>
      </div>
      <a href={repository.html_url} target='blank' rel='nonreferrer'>
        {repository.html_url}
      </a>
      <p>
        <b>Owner :&nbsp;&nbsp;</b> {repository.owner.login}
      </p>

      {repository.language === null ? null : (
        <p>
          <b>Language :&nbsp;&nbsp;</b> {repository.language}
        </p>
      )}

      <p>{repository.description}</p>
    </div>
  );
}

export default RepoInfo;
