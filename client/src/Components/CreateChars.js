function CreateChars({errors}){


    return (
        <div>
            {errors ? 
                (<h2>Whoops! You don't have any characters yet!</h2>)
            :
                (<h2>Create a new character!</h2>)
            }
        </div>
    )
}

export default CreateChars