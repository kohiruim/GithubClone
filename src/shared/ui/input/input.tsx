import type { FC, ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";

type DefaultInputProps = ComponentPropsWithoutRef<'input'>;

type InputProps = Omit<DefaultInputProps, 'className'> & {
  leftSection: JSX.Element;
  id: string;
};

export const Input: FC<InputProps> = ({ leftSection, id, ...defaultInputProps }) => {
  return (
    <>
      <label htmlFor={id}>
        {leftSection}
      </label>
      <input
        className={styles.input}
        type="text"
        name={id}
        {...defaultInputProps}
      />
    </>
  );
}