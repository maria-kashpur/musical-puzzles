import MusicIco1 from './../../assets/icons/9040452_music_note_icon.svg?react'
import MusicIco2 from "./../../assets/icons/353429_music_note_sound_audio_icon.svg?react";
import Game from '../Game/Game';
import { useAppDispatch, useAppSelector } from '@/utils/store/store';
import { newGame } from '@/utils/store/reducers/gameSlice';

function App() {
  const dispatch = useAppDispatch();
  const {status } = useAppSelector(
    (state) => state.game
  );

  return (
    <>
      <header className="header">
        <div className="logo">
          <MusicIco1 height={20} />
          <h1>Музыкальная викторина</h1>
          <MusicIco2 height={20} />
        </div>
        <nav className="nav">
          <button
            className={`btn-header ${status === "create" ? "unactive" : ""}`}
            onClick={() => dispatch(newGame())}>
            Новая игра
          </button>
        </nav>
      </header>
      <main className="conteiner">
        <Game></Game>
      </main>
      <footer className="footer">
        <a href="https://github.com/maria-kashpur" target="_blank">
          created by Maria
        </a>
      </footer>
    </>
  );
}

export default App
