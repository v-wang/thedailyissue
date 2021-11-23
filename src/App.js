import { useState, useEffect } from 'react';

function App() {
  const [repoList, setRepoList] = useState();
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    fetch('https://sheltered-sea-91500.herokuapp.com/github.com/trending')
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        var repoUrlArray = [];
        let repos = doc.querySelectorAll('.Box-row');

        repos.forEach((repo) => {
          // console.log(repo.querySelector('h1 > a'));
          let repoUrl = repo.querySelector('h1 > a').getAttribute('href');
          // console.log(`https://www.github.com${repoURL}`);
          // console.log(`https://api.github.com/repos${repoURL}/issues`);
          // console.log('###');
          repoUrlArray.push(repoUrl);
        });
        setRepoList(repoUrlArray);
        setLoadState(true);
      })
      .catch(function (err) {
        console.warn('Error! Something went wrong.', err);
      });
  }, []);

  if (loadState === false) {
    return (
      <div className='App'>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <h1>{repoList[1]}</h1>
      </div>
    );
  }
}

export default App;
