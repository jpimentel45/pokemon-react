import React, { Component } from 'react'

export class Pokedex extends Component {
    render() {
        return (
            <div>
                <section className='pokedex'>
                    <h2>Pokedex</h2>
                    <div className='pokedex-list'>
                        {pokedex.map(pokemon => (
                            <div className="pokemon" key={pokemon.id}>
                                <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt='' className='sprite' />
                                <h3 className='pokemon-name'>{pokemon.name}</h3>

                                <button className="remove" onClick={() => releasePokemon(pokemon.id)}>&times;</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}

export default Pokedex
