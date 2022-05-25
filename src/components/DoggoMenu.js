import React from "react"

function DoggoMenu({dogs, onDogClick}) {
    function showLinks() {
        return dogs.map((dog) => {
            return <span onClick={() => onDogClick(dog)} key={dog.id}>
                {dog.name}
                </span>
            }
        )
    }
    return <>
    { showLinks() }
    </>
}

export default DoggoMenu