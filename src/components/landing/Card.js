import React from "react";

function Card(props) {

    return(
        <article className="element">
            <img className="element__image" alt={props.card.title} src={props.card.link}/>
            <div className='element__gradient'/>
            <div className="element__text">
                <p className="element__text-title">{props.card.title}</p>
                <p className="element__text-main">{props.card.text}</p>
            </div>
            <div className="element__info">
                <p className="element__info-author">{props.card.author}</p>
                <p className="element__info-date">{props.card.date}</p>
            </div>
        </article>
    )
}

export default Card