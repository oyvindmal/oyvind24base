
import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: eventData } = await supabase
  .from("Collections")
  .select('*')
  .eq('id', params.id);


  const { data: albumData, error } = await supabase
    .from('Albums')
    .select(`
      *,
     
      Metadata(*),
      AlbumPhotos:Photos!Photos_album_id_fkey(fileName),
      FeaturedPhoto:Photos!featuredPhotoId(fileName)
   
    `).eq('published', true)
    .eq('eventId', params.id)
    .order('date', { ascending: false });


    const { data: postsData, postsError } = await supabase
    .from('Posts')
    .select(`
      *
    `).eq('published', true)
    .eq('eventId', params.id)
    .order('date', { ascending: false });

    let combined = albumData?.concat(postsData);

    combined.sort((a, b) => new Date(b.date) - new Date(a.date));
  return {
    event: eventData ?? [],
    albums: albumData ?? [],
    posts: postsData ?? [],
    combined: combined ?? [],

  };
}
