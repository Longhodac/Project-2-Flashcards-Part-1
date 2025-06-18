const Card = ({ card, isFlipped, onFlip}) => {
    return(
        <div className="flash-card-container">
            <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
                <div className="flash-card-front">
                    <h2>{card.question}</h2>
                    <div style={{ 
                        position: 'absolute', 
                        bottom: '1rem', 
                        fontSize: '0.875rem', 
                        color: 'rgba(30, 64, 175, 0.7)',
                        fontStyle: 'italic'
                    }}>
                        Click to flip
                    </div>
                </div>
                <div className="flash-card-back">
                    <p>{card.answer}</p>
                    <div style={{ 
                        position: 'absolute', 
                        bottom: '1rem', 
                        fontSize: '0.875rem', 
                        color: 'rgba(30, 64, 175, 0.7)',
                        fontStyle: 'italic'
                    }}>
                        Click to see question again
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Card;