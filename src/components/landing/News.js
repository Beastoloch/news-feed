import React from "react";
import CardsList from "./CardsList";
import Nav from "./Nav";

function Main(props){

    return (
        <>
            <Nav routes={props.routes} />
            <CardsList cards={props.cards} pageNumber={10} currentPage={'1'}/>
        </>
    );
}

export default Main;