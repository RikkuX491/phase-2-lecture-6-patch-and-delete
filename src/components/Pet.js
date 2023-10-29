import {useState} from "react"

function Pet({pet, adoptPet}){

    const [favorite, setFavorite] = useState(false)

    function toggleFavorite(){
        setFavorite((favorite) => !favorite)
    }
    
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button onClick={toggleFavorite} className={favorite ? "favorite-button active" : "favorite-button"}>{favorite ? '★' : '☆'}</button>
            <h4>{/* Write a ternary expression to display either the name or the type of animal for the pet here */}</h4>
            <button className="likes-button">{/* Number of likes goes here */} likes</button>
            <br/><br/>
            <button onClick={() => {
                adoptPet(pet.id)
            }} className="adopt-button">Adopt</button>
        </li>
    )
}

export default Pet;