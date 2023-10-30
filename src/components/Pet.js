import {useState} from "react"

function Pet({pet, adoptPet, updatePet}){

    const [favorite, setFavorite] = useState(false)
    const [displayName, setDisplayName] = useState(true)

    function toggleFavorite(){
        setFavorite((favorite) => !favorite)
    }

    function toggleDisplayName(){
        setDisplayName(!displayName)
    }
    
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name} />
            <button onClick={toggleFavorite} className={favorite ? "favorite-button active" : "favorite-button"}>{favorite ? '★' : '☆'}</button>
            <h4 onClick={toggleDisplayName}>{displayName ? pet.name : pet.animal_type}</h4>
            <button onClick={() => {
                updatePet(pet)
            }} className="likes-button">{pet.likes} likes</button>
            <br/><br/>
            <button onClick={() => {
                adoptPet(pet.id)
            }} className="adopt-button">Adopt</button>
        </li>
    )
}

export default Pet;