import { type FC, useLayoutEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Pagination } from "@/features";
import { Repository } from "@/entities";
import { fetchRepositories } from "../api/fetchRepositories";
import styles from "./styles.module.css";

interface Props {
  username: string;
  countRepos: number;
}

export const ProfileRepositories: FC<Props> = ({ username, countRepos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [counterPerPage] = useState(4);

  const { data: repositories, mutate } = useMutation({
    mutationFn: fetchRepositories,
  });

  useLayoutEffect(() => {
    mutate({
      username: username,
      perPage: counterPerPage,
      page: currentPage,
    });
  }, [mutate, username, countRepos, currentPage, counterPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const arrowHandler = (direction: "left" | "right") => {
    if (direction == "left") {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.repositories}>
      <h1 className={styles.title}>Repositories {countRepos}</h1>
      <ul className={styles.listRepo}>
        {repositories?.map(({ id, name, html_url, description }) => (
          <Repository
            key={id}
            title={name}
            description={description}
            url={html_url}
          />
        ))}
      </ul>
      <Pagination
        counterPerPage={counterPerPage}
        countRepos={countRepos}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        arrowHandler={arrowHandler}
      />
    </div>
  );
};
