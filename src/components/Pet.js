import {useState} from "react"

function Pet({pet, adoptPet}){

    const [favorite, setFavorite] = useState(false)
    
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            {favorite ? (
            <button onClick={() => {
                setFavorite((favorite) => !favorite)
            }} className="favorite-button active">★</button>
            ) : (
            <button onClick={() => {
                setFavorite((favorite) => !favorite)
            }} className="favorite-button">☆</button>
            )}
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