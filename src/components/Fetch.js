import React, { useState, useEffect } from 'react';

const Fetch = ({pokemon, setPokemon}) =>{
    
    const fetchPokemon = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {
                return response.json();
            })
            .then(response => {
                setPokemon(response.results);
            })
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick = {fetchPokemon}>Get Those Pokemon!</button>
        </div>
    );
}

export default Fetch;