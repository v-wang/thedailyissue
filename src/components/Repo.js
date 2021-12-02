import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { RepoContext } from './../RepoContext';
import { Link } from 'react-router-dom';

function Repo({ repo }) {
  // determine to show loading message on repo card or not
  const [loadState, setLoadState] = useState(false);

  // set repo data to be displayed
  const [repoData, setRepoData] = useState();

  // CONTEXT FROM APP.JS - api call to fetch issue data when link is clicked
  const { fetchIssues } = useContext(RepoContext);

  // CONTEXT FROM APP.JS - update repository hook to store current selected repository data to avoid additional API calls when displaying general information in repo info holder
  const { setRepository } = useContext(RepoContext);

  const repoInfoHolderElem = document.querySelector('.repo-info-holder');

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

  // fall back when repo cards are loading
  if (loadState === false) {
    return (
      <div className='repo-card'>
        <h4>Loading...</h4>
      </div>
    );
  } else {
    return (
      <Link
        to={{ pathname: `/${repoData.name}`, state: repoData }}
        onClick={() => {
          // update repository hook to hold repo information on clicked link
          setRepository(repoData);
          // fetch issues when Link is clicked
          fetchIssues(repoData);
          repoInfoHolderElem.scrollTo(0, 0);
        }}
      >
        <div className='repo-card' id={repoData.id}>
          <img src={repoData.owner.avatar_url}></img>

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
