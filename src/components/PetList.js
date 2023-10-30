import Pet from "./Pet"

function PetList({pets, adoptPet, updatePet}){

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} adoptPet={adoptPet} updatePet={updatePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    )
}

export default PetList;