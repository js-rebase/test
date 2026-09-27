async function getLatestCommit() {
  const response = await fetch(
    "https://api.github.com/repos/js-rebase/code/commits?per_page=1"
  );

  if (!response.ok) {
    throw new Error("Could not fetch latest commit");
  }

  const commits = await response.json();

  return commits[0].sha;
}

const sha = await getLatestCommit();

const script = document.getElementById("script");

script.src = `https://cdn.jsdelivr.net/gh/js-rebase/code@${sha}/packages/main.js`;
