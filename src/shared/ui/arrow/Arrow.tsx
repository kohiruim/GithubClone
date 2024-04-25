import type { FC, ComponentProps } from "react";
import { getIcon } from "../../lib/getIcon";

type Props = {
  type: "left" | "right";
} & Pick<ComponentProps<"button">, "onClick" | "className" | "disabled">;

export const Arrow: FC<Props> = ({
  type,
  className,
  ...otherProps
}) => {
  const icon = getIcon(type);

  return (
    <button className={className} {...otherProps}>
      {icon}
    </button>
  );
};
