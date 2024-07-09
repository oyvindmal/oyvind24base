import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: videosData } = await supabase
  .from("Videos")
  .select('*')
  .eq('published', true)
  .order('date', { ascending: false });

  const { data: postsData } = await supabase
  .from("Posts")
  .select('*')
  .eq('published', true)
  .order('date', { ascending: false });
  const { data: albumsData } = await supabase
  .from('Albums')
  .select(`
    *,
   
    Metadata(*),
    AlbumPhotos:Photos!Photos_album_id_fkey(fileName),
    FeaturedPhoto:Photos!featuredPhotoId(fileName)
 
  `).eq('published', true)
  .order('date', { ascending: false });


  // Concatenate arrays
const combinedArray = videosData.concat(postsData, albumsData);

// Sort the combined array by the date property
combinedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
  return {
    videos: videosData ?? [],
    albums: albumsData ?? [],
    posts: postsData ?? [],
    all: combinedArray ?? [],

  };
}
