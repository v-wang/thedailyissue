import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecentCard from './RecentCard';

function Dashboard({
  repository,
  recent,
  updateRecent,
  fetchIssues,
  setRepository,
}) {
  const [hackthonInfo, setHackathonInfo] = useState();

  useEffect(() => {
    fetch('https://www.reddit.com/r/hackathon/.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setHackathonInfo(response.data.children.splice(0, 3));
        // const shortList = hackthonInfo.splice(0,2)
      });
  }, []);

  return hackthonInfo == null ? (
    <div className='dashboard'>
      <div className='recentRepos'>
        <h2>Loading events ...</h2>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className=''></div>
    </div>
  ) : (
    <div className='dashboard'>
      <div className='redditEvents'>
        <h2>Events</h2>
        {hackthonInfo.map((post) => {
          return (
            <a href={post.data.url} target='blank' rel='nonreferrer'>
              <h4>> {post.data.title}</h4>
            </a>
          );
        })}
        <ul>
          {/* {recent.length > 0
            ? recent.map((repo) => (
                <li>
                  <RecentCard
                    repository={repository}
                    recent={recent}
                    updateRecent={updateRecent}
                    fetchIssues={fetchIssues}
                    setRepository={setRepository}
                    repo={repo}
                  />
                </li>
              ))
            : null} */}
        </ul>
      </div>
      <div className=''></div>
    </div>
  );
}

export default Dashboard;