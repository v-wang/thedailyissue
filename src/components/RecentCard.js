import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import repoWhite from '../assets/repo-white.png';

function RecentCard(props) {
  const repoInfoHolderElem = document.querySelector('.repo-info-holder');
  const [repoData, setRepoData] = useState(props.repository);
  return (
    <div>
      {/* <img src={repoWhite} />
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
        <div className='recent-card' id={repoData.id}>
          <h4>{repoData.full_name}</h4>
        </div>
      </Link> */}
    </div>
  );
}

export default RecentCard;
