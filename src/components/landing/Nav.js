import React from "react";

function Nav(props){

    return (
        <div className="nav" id="nav">
            <p className="nav__route">Main Page</p>
            {props.routes ?
                <>
                    {props.routes.map((route) => (
                        <>
                            <div className="nav__symbol"/>
                            <p className='nav__route'>{route.name}</p>
                        </>
                    ))}
                </> : <></>
            }
            <div className='nav__line'/>
        </div>
    );
}

export default Nav;