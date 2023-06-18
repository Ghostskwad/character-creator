function Stats({ stats, points, updateCharacterStats, isEditable }) {

    stats = Object.keys(stats).map((stat) => (
                <h5 key={stat}>
                    {stat.charAt(0).toUpperCase() + stat.slice(1)}: {stats[stat]}
                    {isEditable &&
                    <>
                        <button onClick={() => updateCharacterStats(stat, "subtract")} disabled={points === 30 || stats[stat] === 0}>Subtract</button>
                        <button onClick={() => updateCharacterStats(stat, "add")} disabled={points === 0}>Add</button>
                    </>
                    }
                </h5>
            ))
    return (
            <div>{stats}</div>
    )
}

export default Stats