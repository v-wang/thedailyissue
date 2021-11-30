import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { RepoContext } from '../RepoContext';

function Issue(props) {
  const [loadState, setLoadState] = useState(false);
  const { repository } = useContext(RepoContext);
  const { issueData } = useContext(RepoContext);
  const { setIssueData } = useContext(RepoContext);

  useEffect(() => {
    let credentials = btoa(`v-wang:${process.env.REACT_APP_GITHUB_TOKEN}`);
    let auth = { Authorization: `Basic ${credentials}` };
    fetch(`https://api.github.com/repos/${repository.full_name}/issues`, {
      headers: auth,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setIssueData(response);
        setLoadState(true);
      })
      .catch(function (err) {
        console.warn('Error! Something went wrong.', err);
      });
  }, []);

  if (loadState === false) {
    return (
      <div>
        <h5>loading issues...</h5>
      </div>
    );
  } else {
    return (
      <div>
        <h5>{issueData[0].title}</h5>
      </div>
    );
  }
}

export default Issue;
