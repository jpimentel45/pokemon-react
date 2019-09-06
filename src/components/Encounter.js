import React, { useState, useEffect } from 'react';
import axios from 'axios'
//import './index.css';

function Encounter() {

    const [pokedex, setPokedex] = useState([])
    const [wildPokemon, setWildPokemon] = useState({});

    //effect to encounte wild pokemon
    //If you want to prevent from encounterWildPokemon from running 
    //after deleting each pokemon remove pokedex from useEffect
    //only thing useEffect wont run after successfully catching pokemon
    //[pokedex] || [] chose one and set on useEffect
    useEffect(() => { encounterWildPokemon() }, [pokedex])

    //Get random pokemon id
    const pokeId = () => {
        //ciel:
        const min = Math.ceil(1)
        const max = Math.floor(807)
        return Math.floor(Math.random() * (max - min)) + min
    }

    //create a ranFail have 
    //alert cant run 
    // attack? have pokemon attack : pokemon runs away
    //encouter random
    const encounterWildPokemon = () => { 
            alert('Oh shit! A Poochemon wants to fight!')
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`)
                .then(response => {
                    console.log(response.data)
                    setWildPokemon(response.data)
                    const wild = `${response.data.name}`.toLowerCase().split(' ')
                        .map(word => word[0].toUpperCase() + word.substr(1))
                        .join(' ')
                    alert(`Encountered ${wild}, Let's BATALlll!!!`)
                })
    }
    //Generate random number if not 0 it will escape
    const wildEscapes = () => {
        const min = 0
        const max = 5
        return Math.floor(Math.random() * (max - min)) + min
    }
    const poke = `${wildPokemon.name}`.toLowerCase().split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')

    //function to dodge & escape catch if wildEscaped != 0
    const escaped = () => {
        alert(`${poke} Ran away from PokeBall`)
        encounterWildPokemon()
    }
    //Pokemon escapes after failing to catch 
    const fleeSuccess = () => {
        alert(`${poke} Got Out of PokeBall and Ran away`)
        encounterWildPokemon()
    }

    //Escape after pokeball?
    const escapeBall = () => {
        const min = 0
        const max = 4
        const fleeBall = Math.floor(Math.random() * (max - min)) + min
        fleeBall === 0 ?
            fleeSuccess()
            : alert(`${poke} Got Out of PokeBall`)
    }

    //Run away successfully
    const ranSuccess = () => {
        alert("Ran away successfully")
        encounterWildPokemon()
    }
    //if willRun = 0, Run away from Pokemon 
    const run = () => {
        const min = 0
        const max = 2
        const willRun = Math.floor(Math.random() * (max - min)) + min
        willRun === 0 ?
            ranSuccess() : alert(`You can't run from ${poke}`)
    }


    //Generate random number if not 0 won't catch
    const willCatch = () => {
        const min = 0
        const max = 3
        return Math.floor(Math.random() * (max - min)) + min
    }


    //func: Catch pokemon
    const catchPokemon = (pokemon) => {
        (willCatch() === 0 ?
            ((
                //set state by passing through current state
                setPokedex(state => {
                    //if current state already has id of pokemon
                    const monExists = (state.filter(p => pokemon.id === p.id).length > 0)
                    //if doesnt exist add pokemon to current state, and sort by id
                    if (!monExists) {
                        state = [...state, pokemon]
                        state.sort((a, b) => a.id - b.id)
                        alert(`Caught ${poke}`)
                    }
                    //if does exist encounter new
                    //de
                    else { encounterWildPokemon() }
                    return state
                })

            )
                &&
                encounterWildPokemon())
            :
            //ternary inside willCatch Ternary
            //is wildEscapes() === 0 poke will run encounter new poke
            // or escapeBall, if ===0 poke should run away after pokeball encounter new
            //or alert pokemon escaped pokeball
            (wildEscapes() === 0 ? escaped() : escapeBall())//have ternary statement with gets outs of pokeball: escape or stay to fight
            //will automatically call after each true or fales from above ternary
            //encounterWildPokemon()
        )
        //(alert(`Encountered ${wildPokemon.name}, Let's BATALLLL!!!`))

    }

    //Release Poochimannnn
    const releasePokemon = id => {
   alert(`Releasing Pokemon into the wild`)
        setPokedex(state => state.filter(p => p.id !== id))
    }


    return (
        //render(
        <div className="app-wrapper">
        {  
              /* <header>
                <h1 className='title'> React Hooks</h1>
                <h3 className='subtitle'>With PoKemon</h3>
            </header>
            */
        }
            <section className='wild-pokemon'>
                <h2>Wild Pokemon</h2>
                <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${wildPokemon.id}.png`} alt='' className='sprite' />
                <h3>{wildPokemon.name}</h3>
                <button className='catch-btn' onClick={() => catchPokemon(wildPokemon)}>CATCH</button>
                <button className='catch-btn' onClick={() => run()}>RUN</button>
            </section>
<section className='pokeline'>
<h1 className='pokedot'>.</h1>
</section>
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
        // )  
    )

}

export default Encounter