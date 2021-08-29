/*
 * @Author: VoidY
 * @Date: 2021-08-28 22:49:03
 * @LastEditTime: 2021-08-29 17:10:08
 * @LastEditors: VoidY
 * @Description:
 */
import type { NextPage } from "next";
import Balls from "../../components/Balls/Balls";
import random from "lodash-es/random";

import shuffle from "lodash-es/shuffle";
import { useEffect, useState } from "react";
import range from "lodash-es/range";
import styles from "./index.module.scss";
const Bingo: NextPage = () => {
  const count = 75;
  const [activeNumber, setActiveNumber] = useState(-1);
  const [selectedCount, selectSelectedCount] = useState(0);
  const [startedFlag, setStartedFlag] = useState(false);
  const randomArray = shuffle(range(1, count + 1));

  const randomRoll = () => {
    setActiveNumber(random(selectedCount, randomArray.length - 1));
  };
  useEffect(() => {
    if (startedFlag) {
      setTimeout(() => randomRoll(), 1000);
    }
  }, [activeNumber]);

  const start = () => {
    setStartedFlag(true);
    randomRoll();
  };
  const stop = () => {
    setStartedFlag(false);
    setActiveNumber(selectedCount);
    selectSelectedCount(selectedCount + 1);
  };
  return (
    <>
      <div className={styles.main}>
        <button className={styles.button} onClick={startedFlag ? stop : start}>
          {startedFlag ? "stop" : "start"}
        </button>
        <Balls numbers={count} activeNumber={activeNumber}></Balls>
      </div>
    </>
  );
};
export default Bingo;
