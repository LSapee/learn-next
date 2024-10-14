import MoviesVideos from "@/components/movie-videos";
import {MovieInfo} from "@/components/movie-info";
import {Suspense} from "react";


export default async function MovieDetail({params:{id}}:{params:{id:string}}){
    return <div>
        <Suspense fallback={<h1>Loading.. movieInfo</h1>}>
            <h1>Movie</h1>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading.. video</h1>}>
            <h1>Video</h1>
            <MoviesVideos id={id}/>
        </Suspense>
    </div>
}