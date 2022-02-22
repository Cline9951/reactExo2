import React from "react";

export default function CounterFunc(){
    // Je declare mon state avec cette syntaxe
    // le premier argument sera le nom de mon state
    // le second sera le nom du setteur qui declenchera
    // le render lors d'un update
    const [counter, setCounter] = React.useState(0);

    return (
        <button className=""
        // je n'ai plus qu'à l'utiliser ici
        onClick={() => setCounter(counter + 1)}>
            Clique aussi : {counter}
        </button>
    )
}