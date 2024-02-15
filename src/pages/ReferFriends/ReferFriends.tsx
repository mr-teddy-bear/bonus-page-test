import { FC } from "react";
import classes from "./ReferFirends.module.scss";
import { ActionButton } from "../../components/Button/ActionButton";
import { BonusesAmount } from "../../components/BonusesAmount/BonusesAmount";
import { copyIcon } from "../../assets/images";

const mocksArr = [
  {
    id: 1,
    email: "c************@passmail.net",
    tasks: [
      { id: 1, title: "KYC", finished: true, max: null, current: null },
      {
        id: 2,
        title: "Spot deposit",
        finished: true,
        max: 1000,
        current: 1000,
      },
      {
        id: 3,
        title: "Futures deposit",
        finished: false,
        max: 4000,
        current: 2000,
      },
    ],
  },
  {
    id: 2,
    email: "k************@passmail.net",
    tasks: [
      { id: 1, title: "KYC", finished: false, max: null, current: null },
      {
        id: 2,
        title: "Spot deposit",
        finished: false,
        max: 1000,
        current: 0,
      },
      {
        id: 3,
        title: "Futures deposit",
        finished: false,
        max: 4000,
        current: 0,
      },
    ],
  },
];

const ReferFriends: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.mainContent}>
          <div className={classes.mainContentText}>
            <h1>Rewards hub</h1>
            <div className={classes.divider} />
            <h3>Refer Friends</h3>
          </div>
          <ActionButton
            onClick={() => console.log("click")}
            text={"Join task"}
          />
          <BonusesAmount
            bonusAvailableAmount={1200}
            bonusCollectedAmount={120}
            bonusUpcomingAmount={500}
          />
        </div>
      </div>

      <div className={classes.inviteScreen}>
        <div className={classes.inviteContent}>
          <div className={classes.inviteLinksWrapper}>
            <div className={classes.inviteLink}>
              <div className={classes.left}>
                <p>Invite link</p>
                <div className={classes.copyText}>
                  https://m.cryt.exchange/54312354
                </div>
              </div>
              <img
                src={copyIcon}
                alt=""
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://m.cryt.exchange/54312354"
                  );
                }}
              />
            </div>
            <div className={classes.inviteLink}>
              <div className={classes.left}>
                <p>Invite code</p>

                <div className={classes.copyText}>54312354</div>
              </div>
              <img
                src={copyIcon}
                alt=""
                onClick={() => {
                  navigator.clipboard.writeText("54312354");
                }}
              />
            </div>
          </div>

          <div className={classes.friendsBlock}>
            <div className={classes.title}>Friends invited: 22</div>
            {mocksArr.map((friend) => (
              <div key={friend.id} className={classes.friendEvent}>
                <div className={classes.friendEventContent}>
                  <div className={classes.row}>
                    <div className={classes.email}>{friend.email}</div>
                    <div className={classes.amount}>
                      {/*TODO: Detect span(received/to receive/ available) */}
                      $3 <span>to receive</span>
                    </div>
                  </div>
                  <div className={classes.tasksWrapper}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferFriends;
