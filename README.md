# The Daily Issue

## SCREEN SHOT GOES HERE

[Description](#description)
<br>
[How to Use The Daily Issue](#how-to-use-the-daily-issue)
<br>
[Tech Stack](#tech-stack)
<br>
[Data Sources](#data-sources)
<br>
[APIs](#apis-used)
<br>
[Development](#development)
<br>
[Credits](#credits)
<br>
[Suggestions](#suggestions)

## Description

Find issues for trending GitHub repositories and contribute to open-source projects. The Daily Issue is a web-based application that scrapes live data from GitHub in combination with retrieving repository information from the GitHub API. Data is live updated to reflect daily trends.

## How to Use The Daily Issue

We're always up to date on the daily trending repository list from GitHub. To retrieve the latest list, just refresh the page. The Daily Issue will fetch twenty five trending repositories. Click on a repository card in the main section under "Trending". The repo information dashboard will populate on the right. You'll find general information about the repository listed here. To learn more about the data shown here, check out [Understanding Repository Information](#Understanding-Repository-Information)

If you're interested in following a repository, just click on the heart icon next to the owner avatar to favorite it.

## Tech Stack

- JavaScript
- React.js
- HTML
- CSS

## Data Sources

- [GitHub Trending](https://github.com/trending)
- [r/hackathon](https://www.reddit.com/r/hackathon/)

## APIs Used

In order to generate the latest trending list from GitHub, the repository name is scraped from www.github.com/trending. When a list is returned, the following API is used to call repository information.

[GitHub REST API](https://docs.github.com/en/rest)

- ### Example data from web scraping:

```
[
    "/loveispapapa/txt_files",
    "/github/docs",
    "/prabhatsharma/zinc",
    "/kamranahmedse/developer-roadmap",
    "/trekhleb/javascript-algorithms",
    "/Bogdanp/awesome-advent-of-code",
    "/CaffeineMC/lithium-fabric",
    "/donnemartin/system-design-primer",
    "/public-apis/public-apis",
    "/danielmiessler/SecLists",
    "/VoronDesign/Voron-2",
    "/facebookresearch/Mask2Former",
    "/mehdihadeli/awesome-software-architecture",
    "/babysor/MockingBird",
    "/FerretDB/FerretDB",
    "/awesome-selfhosted/awesome-selfhosted",
    "/supabase/pg_graphql",
    "/iluwatar/java-design-patterns",
    "/typoes/harry-potter-gen-z",
    "/haampie/libtree",
    "/doocs/leetcode",
    "/NARKOZ/hacker-scripts",
    "/goatcorp/FFXIVQuickLauncher",
    "/bevyengine/bevy",
    "/dundunnp/hamibot-auto_xuexiqiangguo"
]
```

- ### Example data from GitHub API:

```
{
  "url": "https://api.github.com/repos/penpot/penpot/issues/1393",
  "repository_url": "https://api.github.com/repos/penpot/penpot",
  "labels_url": "https://api.github.com/repos/penpot/penpot/issues/1393/labels{/name}",
  "comments_url": "https://api.github.com/repos/penpot/penpot/issues/1393/comments",
  "events_url": "https://api.github.com/repos/penpot/penpot/issues/1393/events",
  "html_url": "https://github.com/penpot/penpot/issues/1393",
  "id": 1072115839,
  "node_id": "I_kwDOAugo2c4_5zB_",
  "number": 1393,
  "title": "Update properties of a component",
  "user": {
  "login": "NicolasLeboeuf",
  "id": 62602652,
  "node_id": "MDQ6VXNlcjYyNjAyNjUy",
  "avatar_url": "https://avatars.githubusercontent.com/u/62602652?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/NicolasLeboeuf",
  "html_url": "https://github.com/NicolasLeboeuf",
  "followers_url": "https://api.github.com/users/NicolasLeboeuf/followers",
  "following_url": "https://api.github.com/users/NicolasLeboeuf/following{/other_user}",
  "gists_url": "https://api.github.com/users/NicolasLeboeuf/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/NicolasLeboeuf/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/NicolasLeboeuf/subscriptions",
  "organizations_url": "https://api.github.com/users/NicolasLeboeuf/orgs",
  "repos_url": "https://api.github.com/users/NicolasLeboeuf/repos",
  "events_url": "https://api.github.com/users/NicolasLeboeuf/events{/privacy}",
  "received_events_url": "https://api.github.com/users/NicolasLeboeuf/received_events",
  "type": "User",
  "site_admin": false
}
```

## Development

The development board for The Daily Issue can be found here. It documents upcoming features and current projects we're working on.

[Notion](https://thewangspace.notion.site/48e277dac59e46f9b8bebbaef2d71bea?v=04063f1cc9f845e1a4daa3053e5f90e0)

- ### Wireframes

  - [Figma](https://www.figma.com/file/CKjjvOEtZat49l9a3raGwO/gh-trending-issues)

## Credits

To bypass CORS Violation:

- [cors-anywhere](https://github.com/Rob--W/cors-anywhere)

Icons from:

- [flaticon](https://www.flaticon.com/)
- [icons8](icons8.com)
- [iconfinder](https://www.iconfinder.com/)

## Suggestions

Any ideas on how we can improve The Daily Issue? Shoot us a message at <midnightcoffeecode@gmail.com>
