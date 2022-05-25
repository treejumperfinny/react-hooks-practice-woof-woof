import React, { useState, useEffect } from "react"

function DoggoInfo({ dog }) { 
    const [localDoggo, updatedDog] = useState(dog)

    useEffect(() => {
        updatedDog(dog)
    }, [dog])

    function handleClicked() {
        let newDog = {...localDoggo}
        newDog.isGoodDog = !localDoggo.isGoodDog
        fetch(`http://localhost:3001/pups/${localDoggo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': "Application/json"
            },
            body: JSON.stringify({isGoodDog: newDog.isGoodDog})
        })
        updatedDog(newDog)
    }

    return (
        <>
        <img src={localDoggo.image} alt="" />
        <h2>{localDoggo.name}</h2>
        <button onClick={handleClicked}>{localDoggo.isGoodDog ? "Good Dog" : "Bad Dog"}</button>
        </>
    )
}

export default DoggoInfo;