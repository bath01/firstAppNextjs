import { useState } from "react";
import About from "./Components/about";
import Header from "./Components/Header";


export default function Home() {

  const [tache, setTache] = useState("")

  return (
    <>
      <Header/>
      <h1>TodoList</h1>
      <div>
        <label htmlFor="task">Ajouter une tâche</label><br/>
        <input value={tache} type="text" placeholder="Entrez une tâche !"  id="task"/>
        <button>Ajouter</button>
        <h3>Liste des tâches</h3>
        <ul>

        </ul>
      </div>
    </>
  );
}
