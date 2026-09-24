import { repoOverrides, type Project } from "@/lib/data";

const GITHUB_USER = "jantoandriano";
const PORTFOLIO_TOPIC = "portfolio";
const ONGOING_TOPIC = "in-progress";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
};

const humanize = (s: string) =>
  s
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

function toProject(repo: Repo): Project {
  const topics = repo.topics ?? [];
  const stackTopics = topics.filter((t) => t !== PORTFOLIO_TOPIC && t !== ONGOING_TOPIC).map(humanize);
  const override = repoOverrides[repo.name] ?? {};

  return {
    tag: repo.language ?? "Project",
    title: humanize(repo.name),
    org: "Personal Project",
    desc: repo.description ?? "",
    stack: stackTopics.length ? stackTopics.join(" · ") : repo.language ?? "",
    ...(topics.includes(ONGOING_TOPIC) && { status: "ongoing" as const }),
    ...override,
    link: repo.html_url,
  };
}

// Public repos tagged with the `portfolio` topic, most recently pushed first.
// Cached and revalidated hourly. Throws on failure so ISR keeps serving the
// last good page instead of caching an empty project list.
export async function getGithubProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${res.statusText}`);
  const repos: Repo[] = await res.json();
  return repos.filter((r) => !r.fork && !r.archived && r.topics?.includes(PORTFOLIO_TOPIC)).map(toProject);
}
