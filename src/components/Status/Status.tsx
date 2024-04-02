import s from './status.module.scss'
interface IProps {
  items: number;
  active: number;
}

export default function Status({items, active}: IProps) {
  return (
    <div className={s.status}>
      {Array.from({ length: items }).map((_item, i) => (
        <div className={`${s.status_item} ${i < active ? s.active : ""}`} key={i}></div>
      ))}
    </div>
  );
}
