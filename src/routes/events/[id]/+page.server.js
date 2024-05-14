
import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: eventData } = await supabase
  .from("Events")
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
    .order('albumDate', { ascending: false });

  return {
    event: eventData ?? [],
    albums: albumData ?? [],

  };
}
