import RepoResults from './components/RepoResults';
import RepoInfoHolder from './components/RepoInfoHolder';

import { useState, useEffect } from 'react';

function App() {
  // set trending repository list from webscrape
  const [repoList, setRepoList] = useState();
  // determine load state so that page doesn't load before data is fetched
  const [loadState, setLoadState] = useState(false);

  // webscrape github trending repos
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
      <div className='spp'>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className='app'>
        <div className='main'>
          <header>
            <h1>The Daily Issue</h1>
            <h5>Find issues and contribute to trending repos in GitHub.</h5>
          </header>
          <div className='repo-results'>
            <RepoResults repos={repoList} />
          </div>
        </div>
        <div className='repo-info-holder'>
          <h6>test...</h6>
          <RepoInfoHolder />
        </div>
      </div>
    );
  }
}

export default App;
