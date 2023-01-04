import React, { useState } from 'react';

const UseContador = () => {
    const defaultValue = 4;
    const [contador, setContador] = useState(defaultValue);
    const increment  = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }

    }
    const decrement = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }
    const reset = () => {
        setContador(defaultValue)
    }
    return (
        <div>
            <h3>Contador: {contador}</h3>
           <button type="submit" onClick={increment}>Increment</button> 
           <button type="submit" onClick={decrement}>Decrement</button> 
           <button type="submit" onClick={reset}>Reset</button>
        </div>
    );
}

export default UseContador;
