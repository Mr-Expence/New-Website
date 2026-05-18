const setCountText = (id, value) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
};

const UA = "Mr-Expence/vitepress-site";

// ── Full cards ──
async function fetchProject(slug) {
  const res = await fetch(`https://api.modrinth.com/v2/project/${slug}`, {
    headers: { "User-Agent": UA },
  });
  return res.json();
}

function formatNum(n) {
  if (!n) return "0";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toLocaleString();
}

document.querySelectorAll(".mr-card[data-slug]").forEach(async (el) => {
  const { slug, type, author } = el.dataset;
  el.href = `/projects/${slug}`;
  try {
    const d = await fetchProject(slug);
    if (d.icon_url) {
      el.querySelector(".mr-icon").innerHTML =
        `<img src="${d.icon_url}" alt="${d.title}">`;
    } else {
      el.querySelector(".mr-icon-fallback").textContent = d.title?.[0] ?? "?";
    }
    el.querySelector(".mr-title").textContent = d.title;
    el.querySelector(".mr-author").textContent = author ? `by ${author}` : "";
    el.querySelector(".mr-desc").textContent = d.description;
    el.querySelector(".mr-meta").innerHTML = `
          <span class="mr-stat">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="h-6 w-6 text-secondary"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"></path></svg>
            ${formatNum(d.downloads)} downloads
          </span>
          <span class="mr-stat">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="h-6 w-6 text-secondary"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0"></path></svg>
            ${formatNum(d.followers)} followers
          </span>
          ${(d.categories ?? [])
            .slice(0, 2)
            .map((c) => `<span class="mr-tag">${c}</span>`)
            .join("")}
        `;
  } catch (e) {
    el.querySelector(".mr-title").textContent = slug;
  }
});
