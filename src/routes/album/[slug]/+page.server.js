
import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: albumData } = await supabase
  .from("Albums")
  .select('*, Photos!album_id(*)')
  .eq('id', params.slug);

  return {
    albums: albumData ?? [],

  };
}
