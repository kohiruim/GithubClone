import type { FC, ComponentPropsWithoutRef } from "react";
import { SearchIcon } from "@/shared/assets";
import styles from "./styles.module.css";

type DefaultInputProps = ComponentPropsWithoutRef<"input">;

type InputProps = Omit<DefaultInputProps, "className"> & {
  id: string;
};

export const Input: FC<InputProps> = ({ id, ...defaultInputProps }) => {
  return (
    <>
      <label htmlFor={id}>
        <img className={styles.serchIcon} src={SearchIcon} alt="search" />
      </label>
      <input
        className={styles.input}
        type="text"
        name={id}
        {...defaultInputProps}
      />
    </>
  );
};
