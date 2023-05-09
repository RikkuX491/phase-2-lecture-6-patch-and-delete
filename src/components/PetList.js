import Pet from "./Pet"

function PetList({pets, adoptPet}){

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} adoptPet={adoptPet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    )
}

export default PetList;