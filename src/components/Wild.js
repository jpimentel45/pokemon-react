import React, { Component } from 'react'

export class Wild extends Component {
    render() {
        return (
            <div>
                <section className='wild-pokemon'>
                    <h2>Wild Pokemon</h2>
                    <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${wildPokemon.id}.png`} alt='' className='sprite' />
                    <h3>{wildPokemon.name}</h3>
                    <button className='catch-btn' onClick={() => catchPokemon(wildPokemon)}>CATCH</button>
                    <button className='catch-btn' onClick={() => run()}>RUN</button>
                </section>
            </div>
        )
    }
}

export default Wild
