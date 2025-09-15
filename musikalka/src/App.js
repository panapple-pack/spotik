
import {useState} from 'react';
// Импортируем стили для компонента App
import './App.css';
import Header from './components/Header';
import Track from './components/Track';

// Создание главного компонента App

function App() {
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: "Bogdan dandan",
      artist: "bodya",
      album: "Bog est",
      duration: "5:23"
    },
    {
      id: 1,
      title: "bury the light",
      artist: "dyadya",
      album: "L",
      duration: "4:01"
    },
    {
      id: 1,
      title: "reka",
      artist: "bomj",
      album: "peepee",
      duration: "1:34"
    }
  ]);
  // Компонент просто возвращает нам разметку (JSX)
  return(
    <div className='App'>
      <Header />
      {tracks.map(track => (
        <Track
        key={track.id}
        // key помогает реакту отслеживать элементы списка
        title={track.title}
        artist={track.artist}
        album={track.album}
        duration={track.duration}
        />
      ))}
    </div>
  );
}

// Экспортируем компонент App, чтобы можно было использовать (импортить) в других файлах

export default App;