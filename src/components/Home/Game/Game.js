

export const Game = (props) => {
      return (
        <div className="game">
            <div className="image-wrap">
                <img src={props.imageUrl} />
            </div>
            <h3>{props.imageUrl}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <a href={`/${props._id}`} className="btn details-btn">
                    Details
                </a>
            </div>
        </div>
    )
}