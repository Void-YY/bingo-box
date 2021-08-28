/*
 * @Author: VoidY
 * @Date: 2021-08-28 22:58:00
 * @LastEditTime: 2021-08-28 23:07:13
 * @LastEditors: VoidY
 * @Description:
 */
import range from "lodash-es/range";
import styles from "./Balls.module.scss";
interface Props {
  value: number;
}

interface NumbersProps {
  numbers: number;
}

const ListItem: React.FC<Props> = (props: Props) => {
  return <div className={styles.ball}>{props.value}</div>;
};
const Balls = (props: NumbersProps): React.ReactElement => {
  const numberMap = range(1, props.numbers + 1);
  return (
    <div className={styles.area}>
      {numberMap.map((number: number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </div>
  );
};

export default Balls;
