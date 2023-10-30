import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, setSearchText, adoptPet, addPet, updateFormData, updatePet}){

    return(
        <main>
            <NewPetForm addPet={addPet} updateFormData={updateFormData} />
            <Search setSearchText={setSearchText} />
            <PetList pets={pets} adoptPet={adoptPet} updatePet={updatePet} />
        </main>
    )
}

export default PetPage;