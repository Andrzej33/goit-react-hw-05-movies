import { fetchTrendy } from "API/API"

export const Home = ()=> {
    return(
       <>
       <h1>Trending Movies</h1>
        <ul>
            <li>jgjhggh</li>
            <li>hghghjg</li>
            <li>hhgggffgf</li>
        </ul>
        <button type="button" onClick={fetchTrendy}>Get started</button>
       </>

    )
}