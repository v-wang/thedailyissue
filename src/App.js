import RepoResults from './components/RepoResults';
import RepoInfoHolder from './components/RepoInfoHolder';
import { RepoContext } from './RepoContext';
import { useState, useEffect } from 'react';
import { Route } from 'react-router';
import ghLogo from './assets/gh-logo.png';
import repoLogo from './assets/repository.png';
import heartGrey from './assets/heart-grey.png';
import trending from './assets/trend.png';
import eventsLogo from './assets/events.png';
import historyLogo from './assets/history.png';
import Dashboard from './components/Dashboard';

function App() {
  // set trending repository list from webscrape
  const [repoList, setRepoList] = useState();
  // determine load state so that page doesn't load before data is fetched
  const [loadState, setLoadState] = useState(false);
  // holds selected repo information to avoid additional API calls
  const [repository, setRepository] = useState();
  // set issue data list for given respository
  const [issueData, setIssueData] = useState();

  // determine if issue is bug or not
  const [bugLabel, setBugLabel] = useState(false);

  // determine if fav view should be toggled or not
  const [favView, setFavView] = useState(false);

  // webscrape github trending repos
  useEffect(() => {
    fetch('https://sheltered-sea-91500.herokuapp.com/github.com/trending')
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var repoUrlArray = [];
        let repos = doc.querySelectorAll('.Box-row');

        repos.forEach((repo) => {
          let repoUrl = repo.querySelector('h1 > a').getAttribute('href');
          repoUrlArray.push(repoUrl);
        });
        setRepoList(repoUrlArray);
        setLoadState(true);
      })
      .catch(function (err) {
        console.warn('Error! Something went wrong.', err);
      });
  }, []);

  // used for onClick when Link route for repo is clicked to fetch issues for repo
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

  // set to trending view
  function setViewTrend() {
    setFavView(false);
  }

  // set to favorite view
  function setViewFav() {
    setFavView(true);
  }

  // empty array for favs for initial state if there are no favorites
  const emptyFavArray = [];

  // save repo favorites
  const [favList, setFavList] = useState(() => {
    if (localStorage.getItem('daily issue favs') !== null) {
      return JSON.parse(localStorage.getItem('daily issue favs'));
    } else {
      return emptyFavArray;
    }
  });

  // setFavList handler to save recent fav list
  const saveFav = (name) => {
    if (checkSaved(name) === false) {
      setFavList([...favList, name]);
    } else {
      setFavList(favList.filter((elem) => elem !== name));
    }
  };

  // update local storage when favList is updated - favList dependency because we want it to update only when that changes
  useEffect(() => {
    if (favList.length >= 0) {
      localStorage.setItem('daily issue favs', JSON.stringify(favList));
    }
  }, [favList]);

  // check to see if a repo has already been saved
  // used to determine styles/elements and to help savFav handler function for favList
  const checkSaved = (repo) => {
    return favList.some((elem) => elem === repo);
  };

  // TODO: new feature to track recently viewed repos
  const [recent, setRecent] = useState([]);

  // update recent state handler
  const updateRecent = (repo) => {
    setRecent([...recent, repo]);
  };

  // buffer for page loads when app is fetching for info
  if (loadState === false) {
    return (
      <div className='loadScreen'>
        <div className='loadTop'>
          <div>
            <img src={repoLogo} alt='repository logo' />
            <h1>The Daily Issue</h1>
          </div>
        </div>
        <h2>Fetching the latest issue . . .</h2>
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
          saveFav,
          favList,
          checkSaved,
          bugLabel,
          setBugLabel,
          updateRecent,
        }}
      >
        <div className='app'>
          <div className='main'>
            <header>
              <h1>The Daily Issue</h1>
              <h5>Find issues and contribute to trending repos in GitHub.</h5>
            </header>
            <div className='optionsBar'>
              <h2>{favView === false ? 'Trending' : 'Favorites'}</h2>
              <div className='filterHolder'></div>
            </div>
            <div className='sideBar'>
              <img id='logo' src={repoLogo} alt='repository logo' />
              <button
                onClick={() => {
                  setViewTrend();
                }}
              >
                <img src={trending} alt='trending logo' />
              </button>
              <button
                onClick={() => {
                  setViewFav();
                }}
              >
                <img src={heartGrey} alt='grey heart icon' />
              </button>
              <button>
                <img src={eventsLogo} alt='events icon' />
              </button>
              <button>
                <img src={historyLogo} alt='history icon' />
              </button>
            </div>
            <div className='repo-results'>
              <RepoResults repoList={favView === false ? repoList : favList} />
            </div>
            <Dashboard
              repository={repository}
              recent={recent}
              updateRecent={updateRecent}
              fetchIssu={fetchIssues}
              setRepository={setRepository}
            />
            <footer>
              <a
                href='https://github.com/v-wang'
                target='blank'
                rel='noreferrer'
              >
                <div>
                  <img src={ghLogo} alt='GitHub logo' />
                  <h4>v-wang</h4>
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
