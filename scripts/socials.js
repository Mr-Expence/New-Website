const setCountText = (id, value) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
};

const formatCount = (value) => (value == null ? "N/A" : value.toLocaleString());
// Modrinth
fetch("https://api.modrinth.com/v2/user/Mr_Expence/projects")
  .then((res) => {
    if (!res.ok) throw new Error("Modrinth fetch failed");
    return res.json();
  })
  .then((projects) => {
    const downloads = projects.reduce(
      (sum, project) => sum + (project.downloads || 0),
      0,
    );
    setCountText("modrinth-count", formatCount(downloads));
  })
  .catch(() => setCountText("modrinth-count", "N/A"));
// Github
fetch("https://api.github.com/users/Mr-Expence/repos?per_page=100")
  .then((res) => {
    if (!res.ok) throw new Error("GitHub fetch failed");
    return res.json();
  })
  .then((repos) => {
    const stars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count || 0),
      0,
    );
    setCountText("github-count", formatCount(stars));
  })
  .catch(() => setCountText("github-count", "N/A"));
// CurseForge
setCountText("curseforge-count", "N/A");
// Discord
fetch("https://discord.com/api/guilds/1377934065025679380/widget.json")
  .then((res) => {
    if (!res.ok) throw new Error("Widget not enabled or bad ID");
    return res.json();
  })
  .then((data) => {
    document.getElementById("discord-count").textContent =
      data.presence_count - 3;
  })
  .catch(() => {
    document.getElementById("discord-count").textContent = "N/A";
  });
// Youtube
fetch(
  "https://mixerno.space/api/youtube-channel-counter/user/UCq9MzduXHZDplR16h1upgcQ",
)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("yt-subs").textContent = data.counts[0].count;
  })
  .catch(() => {
    document.getElementById("yt-subs").textContent = "N/A";
  });
// Twitch
fetch("https://decapi.me/twitch/followcount/mrexpence")
  .then((res) => res.text())
  .then((count) => {
    document.getElementById("follower-count").textContent = count;
  })
  .catch(() => {
    document.getElementById("follower-count").textContent = "N/A";
  });
// Instagram
fetch("https://www.instagram.com/YOUR_USERNAME/?__a=1&__d=dis")
  .then((res) => res.json())
  .then((data) => {
    setCountText(
      "instagram-count",
      formatCount(data.graphql?.user?.edge_followers?.count),
    );
  })
  .catch(() => setCountText("instagram-count", "N/A"));

// Twitter/X
setCountText("twitter-count", "N/A");

// Reddit
fetch("https://www.reddit.com/user/YOUR_USERNAME/about.json")
  .then((res) => res.json())
  .then((data) => {
    setCountText("reddit-count", formatCount(data.data?.total_karma));
  })
  .catch(() => setCountText("reddit-count", "N/A"));

// Telegram
setCountText("telegram-count", "N/A");
const UA = "Mr-Expence/vitepress-site";
