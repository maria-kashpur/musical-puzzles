import { SetStateAction, useState } from "react";
import s from "./CreateGame.module.scss";
import { useAppDispatch, useAppSelector } from "@/utils/store/store";
import { addPlayer } from "@/utils/store/reducers/gameSlice";



export default function NewPlayer() {
  const dispatch = useAppDispatch()
  const { players } = useAppSelector(store => store.game)


  const [newPlayer, setNewPlayer] = useState("");
  const [hasPlayer, setHasPlayer] = useState(false);

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setNewPlayer(e.target.value);
    setHasPlayer(checkHasPlayer(`${e.target.value}`));
  };

  function checkHasPlayer (value: string) {
    return Object.keys(players).includes(value) && value.trim() !== "";
  }

  const createPlayer = () => {
    const formatedValue = newPlayer.trim()
    dispatch(addPlayer(formatedValue));
    setNewPlayer("");
  };

  return (
    <div className={s.add_player}>
      <input
        type="text"
        placeholder="Введите название..."
        value={newPlayer}
        onChange={handleInputChange}
      />
      <button onClick={createPlayer} className={s.btn} disabled={hasPlayer}>
        +
      </button>
    </div>
  );
}
