
import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data, error } = await supabase
    .from('Albums')
    .select(`
      *,
      Photos!featuredPhotoId(fileName)
    `)
    .order('albumDate', { ascending: false });
  
  return {
    albums: data ?? [],
  };
}
