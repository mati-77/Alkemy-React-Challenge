import React, {useState, useEffect, useRef, Fragment} from 'react';
import Axios from 'axios';

import Heroe from './Heroe';

export default function Heroes() {

    const [listaHeroes, setListaHeroes] = useState([])

    const estaMontado = useRef(false)

    const reservaHeroes = useRef([])

    function actualizarListaHeroes() {
        if(estaMontado.current) {
            setListaHeroes(reservaHeroes.current)
        } else {
            return;
        }
    }

    async function conseguirHeroes() {
            try {
                for (let i = 1; i < 7; i++) {
                    const response = await Axios.get(`https://superheroapi.com/api/977090142837011/${i}`);
                    reservaHeroes.current.push(response.data)
                }
            } catch (error) {
              console.error(error);
            }

            actualizarListaHeroes()
    }

    
    useEffect(() => {

        estaMontado.current = true

        conseguirHeroes()

        return() => {
            estaMontado.current = false
        }

    }, [])


    console.log(listaHeroes)

    if(listaHeroes.length === 0) {
        return(
            <h1>Cargando...</h1>
        )
    } else {
        return(
            <Fragment>
                <Heroe personaje={listaHeroes[0]}/>
                <Heroe personaje={listaHeroes[1]}/>
                <Heroe personaje={listaHeroes[2]}/>
                <Heroe personaje={listaHeroes[3]}/>
                <Heroe personaje={listaHeroes[4]}/>
                <Heroe personaje={listaHeroes[5]}/>
            </Fragment>
        )
    }
}