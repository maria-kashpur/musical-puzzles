import './app.scss'
import MusicIco1 from './../../assets/icons/9040452_music_note_icon.svg?react'
import MusicIco2 from "./../../assets/icons/353429_music_note_sound_audio_icon.svg?react";
import Game from '../Game/Game';
import { useState } from 'react';


function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <MusicIco1 height={20} />
          <h1>Музыкальная викторина</h1>
          <MusicIco2 height={20} />
        </div>
      </header>
      <main className="conteiner">
        <Game></Game>
      </main>
      <footer className="footer">
        <p>created by Maria</p>
      </footer>
    </>
  );
}

export default App
