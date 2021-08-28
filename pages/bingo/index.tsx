/*
 * @Author: VoidY
 * @Date: 2021-08-28 22:49:03
 * @LastEditTime: 2021-08-28 23:20:12
 * @LastEditors: VoidY
 * @Description:
 */
import type { NextPage } from "next";
import Balls from "../../components/Balls/Balls";
import styles from './index.module.scss'
const Bingo: NextPage = () => {
  const count = 75;
  return (
    <div className={styles.main}>
      <Balls numbers={count}></Balls>
    </div>
  );
};
export default Bingo;
