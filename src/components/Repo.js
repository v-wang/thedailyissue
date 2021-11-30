import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { RepoContext } from './../RepoContext';
import { Link } from 'react-router-dom';

function Repo({ repo }) {
  const [loadState, setLoadState] = useState(false);
  const [repoData, setRepoData] = useState();
  const { setRepository } = useContext(RepoContext);

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
        setRepoData(response);
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
      <Link to={`/${repoData.name}`}>
        <div
          className='repo-card'
          id={repoData.id}
          onClick={() => {
            setRepository(repoData);
          }}
        >
          <img src={repoData.owner.avatar_url}></img>
          {/* <h3>{repository.owner.login}</h3> */}

          <h4>{repoData.name}</h4>

          <p>
            {repoData.description === null
              ? 'No description provided. Follow the repo link to learn more.'
              : repoData.description}
          </p>
        </div>
      </Link>
    );
  }
}

export default Repo;
