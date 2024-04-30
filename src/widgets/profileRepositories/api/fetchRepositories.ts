import type { RepositoryData } from "@/entities/user";
import { makeQuery } from "@/shared/";

type Input = {
  username: string;
  page: number;
  perPage: number;
};

type FetchRepositories = (data: Input) => Promise<Array<RepositoryData>>;

export const fetchRepositories: FetchRepositories = (data: Input) => {
  const point = `users/${data.username}/repos?page=${data.page}&per_page=${data.perPage}`;
  return makeQuery(point) as Promise<Array<RepositoryData>>;
};
