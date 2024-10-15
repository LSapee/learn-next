import MoviesVideos from "@/components/movie-videos";
import {MovieInfo} from "@/components/movie-info";
import {Suspense} from "react";
interface IParams{
    params:{id:string};
}

export async function generateMetadata({params:{id}}:IParams){
    return {
        title:id,
    }
}

export default async function MovieDetail({params:{id}}:IParams){
    return <div>
        <Suspense fallback={<h1>Loading.. movieInfo</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading.. video</h1>}>
            <MoviesVideos id={id}/>
        </Suspense>
    </div>
}