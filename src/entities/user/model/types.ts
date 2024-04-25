export type ProfileData = {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  name: string;
  html_url: string;
  public_repos: number;
};

export type RepositoryData = {
  name: string;
  description: string;
  html_url: string;
  id: string;
};
