import React from 'react';

function Issue({ issueData }) {
  if (issueData === undefined) {
    return (
      <div>
        <h5>loading issues...</h5>
      </div>
    );
  } else if (issueData.length === 0) {
    return (
      <div>
        <h5>No issues!</h5>
      </div>
    );
  } else {
    return (
      <div>
        {issueData.slice(0, 4).map((issue) => {
          return <h5>{issue.title}</h5>;
        })}
      </div>
    );
  }
}

export default Issue;
