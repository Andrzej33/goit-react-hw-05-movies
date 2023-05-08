

export const Cast = ({actors}) => {

    return(
        <ul>{actors.map(actor => <li key={actor.id}>
            <img src="actor.profile_path" alt="actor" />
            <h3>Name: {actor.name}</h3>
            <p>Character: {actor.character}</p>
        </li>)}</ul>
    )
}