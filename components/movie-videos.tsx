import {API_URL} from "@/app/(home)/page";

export async function getVideos(id: string): Promise<any> {
    const response = await fetch(`${API_URL}/${id}/videos`);
    throw new Error("is Broken")
    // return response.json();
}

export default async function MoviesVideos({id}: { id:string}) {
    const videos = await getVideos(id);

    return <h6>{JSON.stringify(videos)}</h6>
}