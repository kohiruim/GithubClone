import styles from "./styles.module.css";
import clsx from 'clsx';

export const getPagination = (
    currentPage: number,
    countPage: number,
    handlePageChange: (num: number) => void
  ) => {
    const printNum = [];
    const activeStyle: string = styles.active ? styles.active : "";
    
    for (let num = 1; num <= countPage; num++) {
      const isCurrentPage = num === currentPage;
      const isEllipsis =
        (num === 2 && currentPage > 3) ||
        (num === countPage - 1 && currentPage < countPage - 2);
  
      if (num === 1 || num === countPage || Math.abs(num - currentPage) <= 1) {
        printNum.push(
          <li
            className={clsx(styles.item, { [activeStyle]: isCurrentPage })}
            key={num}
            onClick={() => {
              handlePageChange(num);
            }}
          >
            {num}
          </li>
        );
      } else if (isEllipsis) {
        printNum.push(
          <li className={styles.item} key={num}>
            ...
          </li>
        );
      }
    }
    return printNum;
};