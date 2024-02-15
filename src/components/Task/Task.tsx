import { FC, useMemo } from "react";
import classes from "./Task.module.scss";
import { checkMarkActive, checkMarkEmpty } from "../../assets/images";

type Props = {
  title: string;
  completed?: boolean;
  currentProgress: number | null;
  max: number | null;
  isProgressBar?: boolean;
};

export const Task: FC<Props> = ({
  title,
  isProgressBar,
  max,
  currentProgress,
  completed,
}) => {
  const currentPercent = useMemo(() => {
    if (!max || !currentProgress || !isProgressBar) return 0;
    return Number(((Number(currentProgress) * 100) / max).toFixed(0));
  }, [currentProgress, isProgressBar, max]);

  return (
    <div className={classes.wrapper}>
      <h2>{title}</h2>

      {completed ? (
        <img className={classes.checkMarkImg} src={checkMarkActive} alt="" />
      ) : isProgressBar && max ? (
        <div className={classes.progressBlock}>
          <div className={classes.progressText}>
            <h3>Progress</h3>
            <div className={classes.percentage}>
              <h4 className={classes.percentageNumber}>
                {((Number(currentProgress) * 100) / max).toFixed(0)}
              </h4>
              <span>%</span>
            </div>
          </div>
          <div className={classes.progressBar}>
            <div
              className={classes.indicator}
              style={{ width: `${currentPercent}%` }}
            />
          </div>
        </div>
      ) : (
        <img className={classes.checkMarkImg} src={checkMarkEmpty} alt="" />
      )}
    </div>
  );
};
