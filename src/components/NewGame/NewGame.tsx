import { SetStateAction, useState } from "react";
import "./new_game.scss";
import ArrowUp from "./../../assets/icons/9165383_arrow_up_icon.svg?react";
import ArrowDown from "./../../assets/icons/9165361_arrow_down_icon.svg?react";
import DeleteIco from "./../../assets/icons/8679882_delete_bin_2_line_icon.svg?react";

interface Props {
  startGame: (players: string[]) => void;
}

export default function NewGame({ startGame }: Props) {
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayer, setNewPlayer] = useState("");

  function handleInputChange(e: { target: { value: SetStateAction<string> } }) {
    setNewPlayer(e.target.value);
  }

  function addPlayer() {
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
    <section className="start">
      <h2>Добавьте команду или игрока:</h2>
      <div className="add_player">
        <input
          type="text"
          placeholder="Введите название..."
          value={newPlayer}
          onChange={handleInputChange}
        />
        <button onClick={addPlayer} className="btn">
          +
        </button>
      </div>

      <ul className="players">
        {players.map((player, index) => (
          <li key={index} className="player">
            <div className="player__name">{player}</div>
            <div className="players__control">
              <button className="btn" onClick={() => deletePlayer(index)}>
                <DeleteIco height={20} />
              </button>
              <button className="btn" onClick={() => movePlayerUp(index)}>
                <ArrowUp height={20} className="icon" />
              </button>
              <button className="btn" onClick={() => movePlayerDown(index)}>
                <ArrowDown height={20} className="icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="btn start_btn"
        disabled={players.length === 0}
        onClick={() => startGame(players)}>
        Начать игру
      </button>
    </section>
  );
}
