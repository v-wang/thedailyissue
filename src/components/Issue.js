import React from 'react';

function Issue({ issueData }) {
  if (issueData === undefined) {
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
