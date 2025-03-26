import { v4 } from "uuid";

import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalData } from "./data";
import './styles.css'

function Lesson07 () {
    const animalCards = animalData.map((animal)=>{
        return <AnimalCard key={v4()} name={animal.name} species={animal.species} img={animal.image}/>
})


    return (
        <div className="cars-wrapper">
            {animalCards}
        </div>
    )
    //<AnimalCard name="Alex" species="Lion" img=""/>
}

export default Lesson07