import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function RecentCard(props) {
  const repoInfoHolderElem = document.querySelector('.repo-info-holder');
  const [repoData, setRepoData] = useState(props.repository);

  useEffect(() => {
    // setRepoData(props.repository);
    console.log(props.repo);
  }, []);
  return (
    <div>
      <Link
        to={{ pathname: `/${repoData.name}`, state: repoData }}
        onClick={() => {
          // update repository hook to hold repo information on clicked link
          props.setRepository(repoData);
          // fetch issues when Link is clicked
          props.fetchIssues(repoData);
          repoInfoHolderElem.scrollTo(0, 0);

          props.updateRecent(repoData.name);
        }}
      >
        <div className='repo-card' id={repoData.id}>
          <div className='repo-card-top'>
            <img src={repoData.owner.avatar_url}></img>
            <h4>{repoData.name}</h4>
          </div>

          <p>
            {repoData.description === null
              ? 'No description provided. Follow the repo link to learn more.'
              : repoData.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default RecentCard;
