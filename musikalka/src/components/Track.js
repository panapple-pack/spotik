function Track(props) {
    return(
        <div className="track">
            <div className="track-info">
                <h3 className="track-title">{props.title}</h3>
                <p className="artist">{props.artist} | {props.album}</p>
            </div>
            <div className="track-duration">
                {props.duration}
            </div>
        </div>
    );
}

export default Track;