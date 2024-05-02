
import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data, error } = await supabase
    .from('Albums')
    .select(`
      *,
     
      Metadata(*),
      AlbumPhotos:Photos!Photos_album_id_fkey(fileName),
      FeaturedPhoto:Photos!featuredPhotoId(fileName)
   
    `).eq('published', true)
    .order('albumDate', { ascending: false });
    if (error) console.log('Supabase error:', error);

  return {
    albums: data ?? [],
  };
}
