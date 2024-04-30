import { Input, makeQuery } from "@/shared";
import styles from "./styles.module.css";
import type { FormEventHandler } from "react";

import {
  useMutation,
  useQueryClient,
  type QueryKey,
} from "@tanstack/react-query";

type SearchFormValues = {
  search: HTMLInputElement;
}

export const SearchForm = () => {
  const fetchUser = (username: string) => makeQuery(`users/${username}`);
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["myQueryKey"];

  const { mutate } = useMutation({
    mutationFn: fetchUser,

    onError: () => {
      queryClient.setQueryData(queryKey, {});
    },
    onSuccess: data => {
      queryClient.setQueryData(queryKey, data);
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement & SearchFormValues> = (event) => {
    event.preventDefault();
    const element = event.currentTarget.search;
    const value = element.value;
    if (value) {
      mutate(value);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      action="/search"
      method="get"
    >
      <Input id="search" placeholder="Enter Github username" />
    </form>
  );
};
