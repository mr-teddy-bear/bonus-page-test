import { FC } from "react";
import classes from "./ActionButton.module.scss";
import classNames from "classnames";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  className?: string;
};

export const ActionButton: FC<Props> = ({
  text,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(classes.wrapper, className)}
    >
      {text}
    </button>
  );
};
