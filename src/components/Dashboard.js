import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import RecentCard from './RecentCard';

function Dashboard({
  repository,
  recent,
  updateRecent,
  fetchIssues,
  setRepository,
}) {
  return repository === undefined ? (
    <div className='dashboard'>
      <div className='recentRepos'>
        <h2>Recently visited</h2>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className=''></div>
    </div>
  ) : (
    <div className='dashboard'>
      <div className='recentRepos'>
        <h2>Recently visited</h2>
        <ul>
          {/* {recent.length > 0
            ? recent.map((repo) => (
                <RecentCard
                  repository={repository}
                  recent={recent}
                  updateRecent={updateRecent}
                  fetchIssues={fetchIssues}
                  setRepository={setRepository}
                  repo={repo}
                />
              ))
            : null} */}
        </ul>
      </div>
      <div className=''></div>
    </div>
  );
}

export default Dashboard;
