import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import vectorIcon from "../../images/vector.svg";


function CardsList(props) {

    return (
        <main className="content">
            <div className="content__title">
                <div className="content-button button">
                    <img className="content-button__image button__image" src={vectorIcon} alt={''}/>
                </div>
                <p className='content__title-text'>Новости и анонсы</p>
            </div>
            <section className="content__elements" id="elements">
                {props.cards.length ?
                    <>{props.cards.map((card) => (
                        <Card key={card._id} card={card} />
                    ))}
                    </> : <></>
                }
            </section>
            <Pagination number={props.pageNumber} currentPage={props.currentPage} />
        </main>
    );
}

export default CardsList;