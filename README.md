// Deleted code need to fix 
  const catchPokemon = (pokemon) => {
        
        wildEscapes() == 0 ?
        
        (
        
        //set state by passing through current state
        // const min = 0
        // const max = 3
        // const willCatch = Math.floor(Math.random() * (max - min)) + min
        willCatch() == 0 ?
       ( (
        setPokedex(state => {
            //if current state already has id of pokemon
            const monExists = (state.filter(p => pokemon.id == p.id).length > 0)
            //if doesnt exist add pokemon to current state, and sort by id
            if (!monExists) {
                state = [...state, pokemon]
                state.sort((a, b) => a.id - b.id)

            }
            return state
        })
        
            ) &&
            encounterWildPokemon()) : alert("Pokemon Got Out of PokeBall")
            //will automatically call after each true or fales from above ternary
        //encounterWildPokemon()
        ) 
            : encounterWildPokemon() && alert('pokemon got away')  ;
    }