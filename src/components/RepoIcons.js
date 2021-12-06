import React from 'react';
import stargazer from '../assets/star.png';
import watch from '../assets/eye.png';
import fork from '../assets/fork.png';
import issueIcon from '../assets/issue.png';

function RepoIcons({ repository }) {
  const iconHolderH5s = document.querySelectorAll('.icons > h5');
  iconHolderH5s.forEach((elem) => {
    if (elem.innerText <= 10) {
      elem.setAttribute('class', 'red');
    } else if (elem.innerText <= 35) {
      elem.setAttribute('class', 'orange');
    } else {
      elem.setAttribute('class', 'green');
    }
  });
  return (
    <div className='iconHolder'>
      <div className='icons'>
        <img src={stargazer} alt='star icon' />
        <h5>{repository.stargazers_count}</h5>
      </div>
      <div className='icons'>
        <img src={fork} alt='fork icon' />
        <h5>{repository.forks_count}</h5>
      </div>
      <div className='icons'>
        <img src={watch} alt='watch eye icon' />
        {/* subscribers_count is the watch count */}
        <h5>{repository.subscribers_count}</h5>
      </div>
      <div className='icons'>
        <img src={issueIcon} alt='issue icon' />
        <h5>{repository.open_issues_count}</h5>
      </div>
    </div>
  );
}

export default RepoIcons;
