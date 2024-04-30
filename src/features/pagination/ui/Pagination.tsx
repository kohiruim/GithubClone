import type { FC } from "react";
import styles from "./styles.module.css";
import { Arrow } from "@/shared";
import { getPagination } from "../lib/getPagination";

type Props = {
  counterPerPage: number;
  countRepos: number;
  handlePageChange: (num: number) => void;
  currentPage: number;
  arrowHandler: (direction: "left" | "right") => void;
};

export const Pagination: FC<Props> = ({
  counterPerPage,
  countRepos,
  handlePageChange,
  currentPage,
  arrowHandler,
}) => {
  const countPage = Math.ceil(countRepos / counterPerPage);
  const startItem =
    currentPage === 1 ? 1 : (currentPage - 1) * counterPerPage + 1;
  let endItem = startItem + counterPerPage - 1;
  endItem = endItem > countRepos ? countRepos : endItem;

  return (
    <div className={styles.pagination}>
      <p className={styles.countItemsInfo}>
        {startItem}-{endItem} of {countRepos} items
      </p>
      <ul className={styles.list}>
        <Arrow
          className={styles.arrow}
          type="left"
          onClick={() => {
            arrowHandler("left");
          }}
          disabled={currentPage === 1}
        />
        {getPagination(currentPage, countPage, handlePageChange).map(
          number => number
        )}
        <Arrow
          className={styles.arrow}
          type="right"
          onClick={() => {
            arrowHandler("right");
          }}
          disabled={currentPage === countPage}
        />
      </ul>
    </div>
  );
};
