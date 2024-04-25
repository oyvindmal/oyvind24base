
import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
  const { data : photoData } = await supabase.from("Photos").select().eq('albumId', params.slug);
  const { data : albumData } = await supabase.from("Albums").select().eq('id', params.slug);
  return {
    albums: albumData ?? [],
    photos: photoData ?? [],
  };
}
