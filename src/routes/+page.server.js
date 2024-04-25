
import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("Albums").select().order('albumDate', {ascending: false});
  return {
    albums: data ?? [],
  };
}
