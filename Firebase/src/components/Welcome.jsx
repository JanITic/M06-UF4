import React from "react";
import IndexMenu from "../pages/IndexMenu";

function Welcome(props) {

    return (<div>
        <h1>Hola {props.username}</h1>
        <h3>Pel·lícules per l’estiu</h3>
        <IndexMenu />
    </div>)
}

export default Welcome;