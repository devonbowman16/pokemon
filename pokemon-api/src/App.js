import './App.css';
import React, {useState} from 'react';
import  axios from "axios";

function App() {

  const [allPokemon, setAllPokemon] = useState([]);

const buttonClick = () =>{
  console.log("comin right up");
  axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response=> {
      console.log(response)
      setAllPokemon(response.data.results);
    })
    .catch(error =>{
      console.log(error);
    })
}

// fetch("https://pokeapi.co/api/v2/pokemon")
//           .then(response => {
//             return response.json();
//         }).then(response => {
//             console.log(response);
//         }).catch(err=>{
//             console.log(err);
//         });


  return (
    <div className="App">
      <h1>Pokemon! Gotta catch em all!</h1>
      <button onClick= {buttonClick} className="btn btn-primary">Fetch Pokemon!</button>
      {
      allPokemon.map((pokemon, i)=>{
        return <h2>{pokemon.name}</h2>
      })
    }
    </div>
  );
}

export default App;
