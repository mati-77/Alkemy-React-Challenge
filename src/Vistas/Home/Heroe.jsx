import React, {useState} from 'react';

import '../Home/heroes.css'


export default function Heroe({personaje}) {


    const [detalles, setDetalles] = useState("d-none")

    function mostrarDetalles() {
        if(detalles === "d-none") {
            setDetalles("detalles")
        } else {
            setDetalles("d-none")
        }
    }

    return(
        <div className="d-flex flex-wrap" key={personaje.id}>
            <div className="d-flex flex-column justify-content-center align-items-center flex-md-row mt-3 mb-3">
                <img src={personaje.image.url} alt={`Imagen de ${personaje.name}`} className="img-thumbnail" style={{width: "236px", height: "315px"}} />
                <div className="position-relative ps-md-3 d-flex flex-column align-items-center">
                    <h3>{personaje.name}</h3>
                    <h4>Powerstats:</h4>
                    <ul className="list-group list-group-horizontal mb-2 w-100 flex-wrap">
                        <li className="list-group-item flex-fill">Combate: {personaje.powerstats.combat}</li>
                        <li className="list-group-item flex-fill">Durabilidad: {personaje.powerstats.durability}</li>
                        <li className="list-group-item flex-fill">Inteligencia: {personaje.powerstats.intelligence}</li>
                        <li className="list-group-item flex-fill">Poder: {personaje.powerstats.power}</li>
                        <li className="list-group-item flex-fill">Velocidad: {personaje.powerstats.speed}</li>
                        <li className="list-group-item flex-fill">Fuerza: {personaje.powerstats.strength}</li>
                    </ul>
                    <div className="d-flex justify-content-evenly w-100">
                        <button className="btn btn-danger">eliminar</button>
                        <button className="btn btn-info" onClick={mostrarDetalles}>detalles</button>
                    </div>
                    <div className={`${detalles}`}>
                        <div>
                            <h5>Peso: {personaje.appearance.weight[1]}</h5>
                            <h5>Altura: {personaje.appearance.height[1]}</h5>
                            <h5>Nombre: {personaje.biography["full-name"]}</h5>
                            <h5>Alias: {personaje.biography.aliases[0]}</h5>
                        </div>
                        <div>
                            <h5>Color de ojos: {personaje.appearance["eye-color"]}</h5>
                            <h5>Color de cabello: {personaje.appearance["hair-color"]}</h5>
                            <h5>Lugar de trabajo: {personaje.work.base}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}