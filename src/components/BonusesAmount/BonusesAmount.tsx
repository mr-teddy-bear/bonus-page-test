import { FC } from "react";
import classes from "./BonusesAmount.module.scss";
import {
  bonusCollectedIcon,
  bonusAvailableIcon,
  bonusUpcomingIcon,
} from "../../assets/images";

type Props = {
  bonusCollectedAmount: number;
  bonusAvailableAmount: number;
  bonusUpcomingAmount: number;
};

export const BonusesAmount: FC<Props> = ({
  bonusCollectedAmount,
  bonusUpcomingAmount,
  bonusAvailableAmount,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.bonusItem}>
        <img src={bonusCollectedIcon} alt="" />
        <div className={classes.textContent}>
          <div className={classes.amountWrapper}>
            <div className={classes.amount}>{bonusCollectedAmount}</div>
            <div className={classes.currency}>USDT</div>
          </div>
          <div className={classes.title}>Bonus collected</div>
        </div>
      </div>

      <div className={classes.bonusItem}>
        <img src={bonusUpcomingIcon} alt="" />
        <div className={classes.textContent}>
          <div className={classes.amountWrapper}>
            <div className={classes.amount}>{bonusUpcomingAmount}</div>
            <div className={classes.currency}>USDT</div>
          </div>
          <div className={classes.title}>Upcoming bonuses</div>
        </div>
      </div>

      <div className={classes.bonusItem}>
        <img src={bonusAvailableIcon} alt="" />
        <div className={classes.textContent}>
          <div className={classes.amountWrapper}>
            <div className={classes.amount}>{bonusAvailableAmount}</div>
            <div className={classes.currency}>USDT</div>
          </div>
          <div className={classes.title}>Available bonus</div>
        </div>
      </div>

      <div className={classes.mobileBonusItem}>
        <div className={classes.row}>
          <img src={bonusCollectedIcon} alt="" />
          <div className={classes.title}>Bonus collected</div>
        </div>
        <div className={classes.amountWrapper}>
          <div className={classes.amount}>{bonusCollectedAmount}</div>
          <div className={classes.currency}>USDT</div>
        </div>
      </div>

      <div className={classes.mobileBonusItem}>
        <div className={classes.row}>
          <img src={bonusUpcomingIcon} alt="" />
          <div className={classes.title}>Upcoming bonuses</div>
        </div>
        <div className={classes.amountWrapper}>
          <div className={classes.amount}>{bonusUpcomingAmount}</div>
          <div className={classes.currency}>USDT</div>
        </div>
      </div>

      <div className={classes.mobileBonusItem}>
        <div className={classes.row}>
          <img src={bonusAvailableIcon} alt="" />
          <div className={classes.title}>Available bonus</div>
        </div>
        <div className={classes.amountWrapper}>
          <div className={classes.amount}>{bonusAvailableAmount}</div>
          <div className={classes.currency}>USDT</div>
        </div>
      </div>
    </div>
  );
};
