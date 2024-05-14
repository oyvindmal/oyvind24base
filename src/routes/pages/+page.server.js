import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  const { data: pagesData } = await supabase
  .from("Pages")
  .select('*')
  .order('title', { ascending: false });

  return {
    pages: pagesData ?? [],

  };
}
