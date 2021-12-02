import RepoResults from './components/RepoResults';
import RepoInfoHolder from './components/RepoInfoHolder';
import { RepoContext } from './RepoContext';
import { useState, useEffect } from 'react';
import { Route } from 'react-router';
import ghLogo from './assets/gh-logo.png';

function App() {
  // set trending repository list from webscrape
  const [repoList, setRepoList] = useState();
  // determine load state so that page doesn't load before data is fetched
  const [loadState, setLoadState] = useState(false);
  // holds selected repo information to avoid additional API calls
  const [repository, setRepository] = useState();
  // set issue data list for given respository
  const [issueData, setIssueData] = useState();

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
        // holds repo URL names
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

  // used for onClick when Link route for repo is clicked
  const fetchIssues = (repo) => {
    let credentials = btoa(`v-wang:${process.env.REACT_APP_GITHUB_TOKEN}`);
    let auth = { Authorization: `Basic ${credentials}` };
    fetch(`https://api.github.com/repos/${repo.full_name}/issues`, {
      headers: auth,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setIssueData(response);
      })
      .catch(function (err) {
        console.warn('Error! Something went wrong.', err);
      });
  };

  // save repo favorites
  const [favList, setFavList] = useState([]);

  const saveFav = (id) => {
    setFavList([...favList], id);
    console.log(favList);
  };

  // buffer for page loads to prevent undefined load error
  if (loadState === false) {
    return (
      <div className='app'>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      // pass to child components to set info regarding repo and issues
      <RepoContext.Provider
        value={{
          repository,
          setRepository,
          issueData,
          setIssueData,
          fetchIssues,
        }}
      >
        <div className='app'>
          <div className='main'>
            <header>
              <h1>The Daily Issue</h1>
              <h5>Find issues and contribute to trending repos in GitHub.</h5>
              <div>favorites</div>
            </header>
            <div className='repo-results'>
              <RepoResults repoList={repoList} />
            </div>
            <footer>
              <a
                href='https://github.com/v-wang'
                target='blank'
                rel='noreferrer'
              >
                <div>
                  <img src={ghLogo} />
                  <h4>built by v-wang</h4>
                </div>
              </a>
            </footer>
          </div>
          <div className='repo-info-holder'>
            <Route exact path='/:name' component={RepoInfoHolder} />
            {repository === undefined ? (
              <h5>
                Go ahead and click on a trending respository card to get
                started!
              </h5>
            ) : null}
          </div>
        </div>
      </RepoContext.Provider>
    );
  }
}

export default App;
