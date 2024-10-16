import styles from "../styles/movie-video.module.css"
import {API_URL} from "@/app/constants";

export async function getVideos(id: string): Promise<any> {
    const response = await fetch(`${API_URL}/${id}/videos`);
    // throw new Error("is Broken")
    return response.json();
}

export default async function MoviesVideos({id}: { id:string}) {
    const videos = await getVideos(id);
    return <div className={styles.container}>
        {videos.map((video:any)=> (
            <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
                allowFullScreen
                title={video.name}
            />
        ))}
    </div>
}