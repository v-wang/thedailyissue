import React from 'react';
import { useEffect, useState } from 'react';

function Repo({ repo }) {
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
      <div className='repo-card'>
        <h4>{repository.name}</h4>
      </div>
    );
  }
}

export default Repo;
