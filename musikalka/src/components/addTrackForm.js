import { useState } from "react";
import './addTrackForm.css';

function addTrackForm({ onAddTrack }){
    //Создадим состояние для каждого поля формы
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [duration, setDuration] = useState('');

    // Обработчик отправки формы
    function HandleSubmit(e) {
        e.preventDefault(); // Предотвращение загрузки страницы

        // Создаем новый трек 
        const newTrack = {
            id: Date.now(), // Простой способ получить случайный id
            title,
            artist,
            album,
            duration
        };

        onAddTrack(newTrack);

        // очищаем поля формы
        setArtist('');
        setTitle('');
        setAlbum('');
        setDuration('');
    }

    return(
        <form className="add-track-form" onSubmit={HandleSubmit}>
            <input 
                type="text"
                placeholder="Название трека"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="Название трека"
                value={title}
                onChange={(e) => setArtist(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="Название трека"
                value={title}
                onChange={(e) => setAlbum(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="Название трека"
                value={title}
                onChange={(e) => setDuration(e.target.value)}
                required
            />
            <button type="submit">Добавить трек</button>
        </form>
    );
}

export default addTrackForm;