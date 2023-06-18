import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import Stats from "./Stats";

function CharacterCard({ onDelete }) {
    const { state } = useLocation();
    const [editable, setEditable] = useState(false);
    const [points, setPoints] = useState(0);
    const [originalPoints, setOriginalPoints] = useState(0);
    const [editableStats, setEditableStats] = useState({});
    const [character, setCharacter] = useState(state.character)
    const navigate = useNavigate();

    useEffect(() => {
        setEditableStats({ ...character.stats });
    }, [character]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/characters/${character.id}`);
            onDelete(character.id);
            navigate('/characters');
        } catch (error) {
            console.error('Error deleting character:', error);
        }
    };

    const updateCharacterStats = (stat, operation) => {
        // create a copy of the editableStats
        const newStats = { ...editableStats };

        if (operation === "subtract" && points < 30 && newStats[stat] > 0) {
            setPoints(prevPoints => prevPoints + 1);
            newStats[stat]--;
        }
        if (operation === "add" && points > 0) {
            setPoints(prevPoints => prevPoints - 1);
            newStats[stat]++;
        }
        setEditableStats(newStats);
    };

    const handleUpdate = async () => {
        if (points === 0) {
            await axios.patch(`/characters/${character.id}`, { stats: editableStats });
            setCharacter(prevCharacter => ({
                ...prevCharacter,
                stats: { ...editableStats }
            }));
            toggleEditable()
        } else {
            alert("Please spend the rest of your points.");
        }
    };

    const toggleEditable = () => {
        if (editable) {
            setEditableStats({ ...character.stats });
            setPoints(originalPoints);
        } else {
            setOriginalPoints(points);
        }
        setEditable(prevEditable => !prevEditable);
    };

    return (
        <div>
            <div>
            <h2>{character.name}</h2>
                <h3>{character.character_class_type}</h3>
                <h4>Level: {character.level}</h4>
                <label>Character's History:</label>
                <p>{character.history}</p>
                <h4>Character's Stats: 
                    {editable ? 
                        <>
                            <Stats stats={editableStats} points={points} updateCharacterStats={updateCharacterStats} isEditable={true} />
                            <button onClick={handleUpdate}>Update {character.name}</button>
                            <p>Available Points: {points}</p>
                        </> : 
                        <Stats stats={character.stats} isEditable={false} />}
                </h4>
                <button onClick={toggleEditable}>{editable ? "Cancel" : `Edit ${character.name}`}</button>
                <button onClick={handleDelete}>Delete {character.name}</button>
            </div>
        </div>
    );
}

export default CharacterCard;