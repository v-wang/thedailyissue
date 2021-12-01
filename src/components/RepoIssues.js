import Issue from './Issue';
import { useContext } from 'react';
import { RepoContext } from '../RepoContext';

function RepoIssues({ repository }) {
  const { issueData } = useContext(RepoContext);

  return (
    <div>
      <Issue issueData={issueData}></Issue>
    </div>
  );
}

export default RepoIssues;
