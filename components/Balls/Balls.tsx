/*
 * @Author: VoidY
 * @Date: 2021-08-28 22:58:00
 * @LastEditTime: 2021-08-29 17:01:10
 * @LastEditors: VoidY
 * @Description:
 */
import range from "lodash-es/range";
import styles from "./Balls.module.scss";
interface Props {
  value: number;
  className?: string;
}
interface AreaProps {
  numbers: number;
  activeNumber?: number;
}

const ListItem: React.FC<Props> = (props: Props) => {
  return <div className={styles.ball +' '+ props.className}>{props.value}</div>;
};
const Balls = (props: AreaProps): React.ReactElement => {
  const numberMap = range(1, props.numbers + 1);
  return (
    <div className={styles.area}>
      {numberMap.map((number: number) => (
        <ListItem
          className={props.activeNumber === number ? styles.active : ""}
          key={number.toString()}
          value={number}
        />
      ))}
    </div>
  );
};

export default Balls;
