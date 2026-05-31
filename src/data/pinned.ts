/**
 * List repo names (exact match with GitHub repo name) to feature at the top.
 * All other public repos appear below in star-count order.
 * Set to an empty array to show all repos sorted by stars.
 */
export const pinnedRepos: string[] = [
  'SUM-UP',
  'Full-Stack-Project',
  'Timeout',
  'Security-Authorisation',
  'Networking',
  'DCU',
];

/** Repos to hide entirely (forks, boilerplate, etc.) */
export const hiddenRepos: string[] = [
  // 'old-fork',
];
