import type { FC } from "react";
import styles from "./styles.module.css";
import {
  type ResultVariant,
  resultViewMapper,
} from "@/widgets/result/lib/innerResultType";

type Props = { innerResult: ResultVariant };

export const Result: FC<Props> = ({ innerResult }) => {
  const { icon, text } = resultViewMapper[innerResult];
  return (
    <div className={styles.result}>
      <div className={styles.container}>
        {icon}
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
