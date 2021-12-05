import Issue from './Issue';
import { useContext } from 'react';
import { RepoContext } from '../RepoContext';

function RepoIssues({ repository }) {
  const { issueData, setBugLabel } = useContext(RepoContext);

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
        <h2>Issues:</h2>

        {issueData.forEach((data) => {
          if (data.user.type !== 'Bot') updatedIssueData.push(data);
          return updatedIssueData;
        })}
        {updatedIssueData.slice(0, 4).map((issue) => {
          // if (issue.labels.length > 0) {
          //   issue.labels.forEach((label) => {
          //     if (label.name === 'bug') {
          //       return setBugLabel(true);
          //     } else if (label.name != 'bug') {

          //     }
          //   });
          // }
          return <Issue issue={issue}></Issue>;
        })}
      </div>
    );
  }
}

export default RepoIssues;
