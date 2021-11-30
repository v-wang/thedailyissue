import React from 'react';
import { useEffect, useState } from 'react';

function Repo({ repo, selectRepo }) {
  const [repository, setRepository] = useState();
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    let credentials = btoa(`v-wang:${process.env.REACT_APP_GITHUB_TOKEN}`);
    let auth = { Authorization: `Basic ${credentials}` };
    fetch(`https://api.github.com/repos${repo}`, {
      headers: auth,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setRepository(response);
        setLoadState(true);
      })
      .catch(function (err) {
        console.warn('Error! Something went wrong.', err);
      });
  }, []);

  if (loadState === false) {
    return (
      <div className='repo-card'>
        <h4>Loading...</h4>
      </div>
    );
  } else {
    return (
      <div
        className='repo-card'
        id={repository.id}
        onClick={(ev) => {
          selectRepo(ev);
        }}
      >
        <img src={repository.owner.avatar_url}></img>
        {/* <h3>{repository.owner.login}</h3> */}
        <a href={repository.html_url}>
          <h4>{repository.name}</h4>
        </a>
        <p>
          {repository.description === null
            ? 'No description provided. Follow the repo link to learn more.'
            : repository.description}
        </p>
      </div>
    );
  }
}

export default Repo;
