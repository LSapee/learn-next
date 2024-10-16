import styles from "../styles/movie-info.module.css"
import {API_URL} from "@/components/navigation";


export async function getMovie(id: string): Promise<any> {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export async function MovieInfo({id}: {id:string}) {
    const movie = await getMovie(id);
    return <div className={styles.container}>
        <img className={styles.poster} src={movie.poster_path} alt="poster_path"/>
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3 >⭐ {movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}> Homepage &rarr; </a>
        </div>
    </div>
}