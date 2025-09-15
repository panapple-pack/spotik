// Импортируем стили для компонента App
import './App.css';
import Header from './components/Header';
import Track from './components/Track';

// Создание главного компонента App

function App() {
  // Компонент просто возвращает нам разметку (JSX)
  return(
    <div className='App'>
      <Header />
      <Track 
        title = "42"
        artist = "Serega pirat"
        album = "Goyda"
        duration = "42:24"
      />
      <Track 
        title = "42"
        artist = "Serega pirat"
        album = "Goyda"
        duration = "42:24"
      />
      <h1>Мое первое приложение Musikalka</h1>
    </div>
  );
}

// Экспортируем компонент App, чтобы можно было использовать (импортить) в других файлах

export default App;