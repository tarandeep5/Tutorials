import React, {useState} from 'react';
import {ANIMALS} from '@frontendmasters/pet'

const SearchParams = () => {
    //const location = "Seattle, WA";
    const[location, setLocation] = useState("Seattle, WA"); //seattle is default case
    const[animal, setAnimal] = useState("dog");
    const[breed, setBreed] = useState("");
    const[breeds, setBreeds] = useState([]);

    return (
        <div className = "search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location 
                    <input 
                    id = "location" 
                    value = {location}
                    placeholder = "Location" 
                    onChange={event => {
                        setLocation(event.target.value)}
                    }/>
                </label>
                <label htmlFor="animal">
                    Animal 
                    <select
                        id="animal"
                        value = {animal}
                        onChange= {e => setAnimal(e.target.value)} //part of hook in this case
                        onBlur = {e => setAnimal(e.target.value)} //part of hook for screen reader exception
                    >
                        <option> All </option> 
                        {ANIMALS.map(animal => (
                            <option key = {animal} value={animal}> {animal}</option> //key - doesn't update everything when something is moved on a list, performance improvement
                        ))}
                        </select>
                </label>
                <label htmlFor="breed">
                    Breed 
                    <select 
                        id="breed"
                        value = {breed}
                        onChange = {e => setBreed(e.target.value)}
                        onBlur = {e=> setBreed(e.target.value)}
                        disabled = {breeds.length === 0} //cannot click if breeds.length is 0
                    >
                        <option>All</option>
                        {breeds.map(breedString => (
                            <option key = {breedString} value={breedString}></option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;