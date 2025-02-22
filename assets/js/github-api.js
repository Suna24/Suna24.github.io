const github_username = "Suna24";

async function fetchGithubStats() {
  const response = await fetch(
    `https://api.github.com/users/${github_username}`
  );
  const data = await response.json();

  const reposResponse = await fetch(
    `https://api.github.com/users/${github_username}/repos?per_page=100`
  );
  const reposData = await reposResponse.json();

  let totalStars = reposData.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  );
  let totalCommits = 0;

  for (const repo of reposData) {
    const commitResponse = await fetch(repo.commits_url.replace("{/sha}", ""));
    const commits = await commitResponse.json();
    totalCommits += commits.length;
  }

  document.getElementsByClassName(
    "github-avatar"
  )[0].style.backgroundImage = `url(${data.avatar_url})`;
  document.getElementsByClassName("repository-number")[0].innerText =
    data.public_repos;
  document.getElementsByClassName("commits-number")[0].innerText =
    totalCommits + " commits";
  document.getElementsByClassName("star-number")[0].innerText = totalStars;
}

fetchGithubStats();
