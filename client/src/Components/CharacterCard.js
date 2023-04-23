function CharacterCard ({char}) {

    return (
        <div>
                <div>
                    <h3>{char.name}</h3>
                    <h5>{char.character_class_type}</h5>
                    <label>Character's History: <br/> {char.history}</label>
                    <p>Characters Stats: 
                        <li>Constitution: {char.stats.constitution}</li>
                        <li>Strength: {char.stats.strength}</li>
                        <li>Dexterity: {char.stats.dexterity}</li>
                        <li>Intelligence: {char.stats.intelligence}</li>
                        <li>Charisma: {char.stats.charisma}</li>
                        <li>Wisdom: {char.stats.wisdom}</li>
                    </p>
                </div>
        </div>
    )
}

export default CharacterCard