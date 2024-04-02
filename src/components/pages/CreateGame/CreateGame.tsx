import s from "./create_game.module.scss"
import ArrowUp from "@assets/icons/9165383_arrow_up_icon.svg?react";
import ArrowDown from "@assets/icons/9165361_arrow_down_icon.svg?react";
import DeleteIco from "@assets/icons/8679882_delete_bin_2_line_icon.svg?react";
import { SetStateAction, useState } from "react";
import { useAppDispatch } from "@/utils/store/store";
import { addPlayer, setStatus } from "@/utils/store/reducers/gameSlice";

export default function CreateGame() {
  const dispatch = useAppDispatch();

  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayer, setNewPlayer] = useState("");

  const startGame = () => {
    dispatch(setStatus("play"));
    players.forEach((title) => dispatch(addPlayer(title)));
  };
  
  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setNewPlayer(e.target.value);
  }

  const createPlayer = () => {
    if (newPlayer.trim() !== "") {
      setPlayers((p) => [...p, newPlayer]);
      setNewPlayer("");
    }
  }

  function deletePlayer(index: number) {
    const updatedPlayers = players.filter((_el, i) => i !== index);
    setPlayers(updatedPlayers);
  }

  function movePlayerUp(index: number) {
    if (index > 0) {
      const updatedPlayers = [...players];
      [updatedPlayers[index], updatedPlayers[index - 1]] = [
        updatedPlayers[index - 1],
        updatedPlayers[index],
      ];
      setPlayers(updatedPlayers);
    }
  }

  function movePlayerDown(index: number) {
    if (index < players.length - 1) {
      const updatedPlayers = [...players];
      [updatedPlayers[index], updatedPlayers[index + 1]] = [
        updatedPlayers[index + 1],
        updatedPlayers[index],
      ];
      setPlayers(updatedPlayers);
    }
  }

  return (
    <section className={s.start}>
      <h2 className={s.title}>Добавьте команду или игрока:</h2>
      <div className={s.add_player}>
        <input
          type="text"
          placeholder="Введите название..."
          value={newPlayer}
          onChange={handleInputChange}
        />
        <button onClick={createPlayer} className={s.btn}>
          +
        </button>
      </div>

      <ul className={s.players}>
        {players.map((player, index) => (
          <li key={index} className={s.player}>
            <div>{player}</div>
            <div className={s.players__control}>
              <button className={s.btn} onClick={() => deletePlayer(index)}>
                <DeleteIco height={20} />
              </button>
              <button className={s.btn} onClick={() => movePlayerUp(index)}>
                <ArrowUp height={20} className={s.icon} />
              </button>
              <button className={s.btn} onClick={() => movePlayerDown(index)}>
                <ArrowDown height={20} className={s.icon} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className={`${s.btn} ${s.start_btn}`}
        disabled={players.length === 0}
        onClick={() => startGame()}>
        Начать игру
      </button>
    </section>
  );
}
