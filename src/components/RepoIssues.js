import Issue from './Issue';
import { useContext, useEffect, useState } from 'react';
import { RepoContext } from '../RepoContext';

function RepoIssues({ repository, bugCount, setBugCount }) {
  // from App component
  const { issueData } = useContext(RepoContext);

  // state to determine array length for show more button
  const [maxIssues, setMaxIssues] = useState(4);

  // handles max issues change
  useEffect(() => {
    setMaxIssues(4);
  }, [repository]);
  const seeMore = () => {
    setMaxIssues(maxIssues + 4);
  };

  // array to hold cleaned issues without bots
  let updatedIssueData = [];

  if (issueData === undefined) {
    return (
      <div>
        <h5>loading...</h5>
      </div>
    );
  } else if (issueData.length === 0) {
    return (
      <div>
        <h5>There are no issues currently, but cool repo to follow!</h5>
        <h5>Add it to "Favorites" if you want to check back later.</h5>
      </div>
    );
  } else {
    return (
      <div className='issuesHolder'>
        <h2>Issues :</h2>

        {issueData.forEach((data) => {
          if (data.user.type !== 'Bot') updatedIssueData.push(data);
          return updatedIssueData;
        })}
        {updatedIssueData.slice(0, maxIssues).map((issue) => {
          return (
            <Issue
              issue={issue}
              bugCount={bugCount}
              setBugCount={setBugCount}
            ></Issue>
          );
        })}
        <button onClick={() => seeMore()}>
          <div>
            <h3>see more</h3>
          </div>
        </button>
      </div>
    );
  }
}

export default RepoIssues;
